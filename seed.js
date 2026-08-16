const mongoose=require('mongoose')

const Movie=require('./models/movieModel');

const dummyMovie=[
  {
    name: "Inception",
    year: 2010,
    img: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    desc: "A thief who steals corporate secrets through dreams is given a chance to erase his past."
  },
  {
    name: "Interstellar",
    year: 2014,
    img: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    desc: "A team travels through a wormhole in space to ensure humanity's survival."
  },
  {
    name: "The Dark Knight",
    year: 2008,
    img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    desc: "Batman faces the Joker, a criminal mastermind spreading chaos in Gotham."
  },
  {
    name: "Avengers: Endgame",
    year: 2019,
    img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    desc: "The Avengers assemble once more to undo Thanos' actions and restore balance."
  },
  {
    name: "Titanic",
    year: 1997,
    img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    desc: "A love story unfolds aboard the ill-fated Titanic ship."
  },
  {
    name: "3 Idiots",
    year: 2009,
    img: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
    desc: "Three engineering students navigate friendship, pressure, and life lessons."
  },
  {
    name: "Dangal",
    year: 2016,
    img: "https://image.tmdb.org/t/p/w500/p2lVAcPuRPSO8Al6hDDGw0OgMiK.jpg",
    desc: "A former wrestler trains his daughters to become world-class athletes."
  },
  {
    name: "KGF Chapter 1",
    year: 2018,
    img: "https://image.tmdb.org/t/p/w500/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg",
    desc: "A young man rises in the underworld with ambition and power."
  },
  {
    name: "Bahubali: The Beginning",
    year: 2015,
    img: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg",
    desc: "A man discovers his royal heritage and sets out to reclaim his kingdom."
  },
  {
    name: "RRR",
    year: 2022,
    img: "https://image.tmdb.org/t/p/w500/lvuzpWuqc4FUVz9HnW0Zt3aN2vP.jpg",
    desc: "Two revolutionaries fight against British rule in a fictional story."
  }
];

function seed(){
    Movie.insertMany(dummyMovie)
.then(()=>{
    console.log("data inserted")
})
}

module.exports=seed;