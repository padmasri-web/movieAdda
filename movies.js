require('dotenv').config();
const express = require('express')
const app = express()

const path = require('path')

const mongoose = require('mongoose')

const seed = require('./seed')

app.use(express.urlencoded({ extended: true })) //middleware

app.set('view engine', 'ejs')//deafult parent/view

const Movie = require('./models/movieModel');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.use(express.static(path.join(__dirname, 'public')));



const dbUrl = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/movies';

mongoose.connect(dbUrl)
  .then(() => {
    console.log("Database connected successfully")
  })
  .catch((err) => {
    console.log("Database connection error:", err)
  })

app.get('/', async (req, res) => {
  const { k, q } = req.query;
  // console.log(k,q) 
  let allMovies = null;
  if (q) {
    allMovies = await Movie.find({ name: { $regex: q, $options: 'i' } })
  }
  else {
    allMovies = await Movie.find()
  }

  //    res.send(allMovies)

  res.render('index.ejs', { allMovies })
})

app.get('/movie/:id', async (req, res) => {
  const { id } = req.params
  const m = await Movie.findById(id);
  //  res.send(m) //shows the data normally 
  res.render('show.ejs', { m });
})

app.post('/create', async (req, res) => {
  const { name, year, img, desc } = req.body;

  console.log(name, year, img, desc);

  const movieData = { name, year, desc };
  if (img && img.trim() !== '') {
    movieData.img = img;
  }

  await Movie.create(movieData);

  res.redirect('/');

})


app.get('/new', (req, res) => {
  res.render('new.ejs')
})

app.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const m = await Movie.findById(id)

  // res.send(m)
  res.render('edit.ejs', { m });
})

app.put('/edit/:id', async (req, res) => {
  const { id } = req.params;

  const { name, year, img, desc } = req.body;

  await Movie.findByIdAndUpdate(id, { name, year, img, desc });

  res.redirect(`/movie/${id}`);

})

app.post('/rating/:id', async (req, res) => {
  const { id } = req.params;
  const { rating, comment } = req.body;

  const m = await Movie.findById(id)
  m.ratings.push({ rating, comment })
  await m.save()

  console.log(m)

  // res.send({rating,comment})

  res.redirect(`/movie/${id}`)

})

app.get('/trending', async (req, res) => {

  let movies = await Movie.find();

  // add avgRating to each movie
  movies = movies.map(movie => {
    let avg = 0;

    if (movie.ratings.length !== 0) {
      avg = movie.ratings.reduce((acc, cur) => acc + cur.rating, 0) / movie.ratings.length;
    }

    return {
      ...movie._doc,
      avgRating: avg
    };
  });

  // sort by avgRating (descending)
  movies.sort((a, b) => b.avgRating - a.avgRating);

  // take top 5
  const top5 = movies.slice(0, 5);

  res.render('topMovies', { movies: top5 });

});

app.get('/summary/:id', async (req, res) => {
  const { id } = req.params;
  const m = await Movie.findById(id);

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt(m),
  });
  let cleanText = (response.text || '').replace(/```json/gi, '').replace(/```/g, '').trim();
  const data = JSON.parse(cleanText);

  //   console.log("json",data);
  //   console.log("json",response.title);

  // res.send({m,data});
  res.render('summary.ejs', { m, data });
})

function prompt(m) {
  return `You are a movie information assistant.

Input:
Movie Name: ${m.name}
Year of Release: ${m.year}

Task:
1. Generate a summary of the movie in approximately 200 words.
2. Provide a list of main cast members with their character names.
3. Provide a poster image URL (use a valid public movie poster link if possible).

Output ONLY in JSON format like this:

{
  "title": "Movie Name",
  "year": "Year",
  "summary": "200-word summary here",
  "poster": "image_url_here",
  "cast": [
    "Actor as Character",
    "Actor as Character",
    "Actor as Character"
  ]
}`
}



// seed();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})