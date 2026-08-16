# 🍿 movieAdda — Movie Library & AI Summaries

![Node.js](https://img.shields.io/badge/Node.js-v18+-68a063?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-v5.0-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47a248?style=for-the-badge&logo=mongodb&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini_AI-v1.52-8E75B2?style=for-the-badge&logo=google&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3-7952b3?style=for-the-badge&logo=bootstrap&logoColor=white)

> A modern, glassmorphic full-stack movie application built with **Express.js**, **EJS**, **MongoDB**, and integrated with **Google Gemini AI** for instant AI plot summaries and cast breakdowns.

---

## ✨ Features

- 🎬 **Movie Catalog & Search:** Explore a collection of movies or search titles with instant case-insensitive regex pattern matching.
- 🤖 **Google Gemini AI Summaries:** Generate instant 200-word plot summaries, starring cast lists, and poster links powered by Gemini AI with loading animations and rotating status messages.
- 🌟 **Interactive Star Ratings & Reviews:** Rate movies from 1 to 5 stars using interactive gold star pickers and view community reviews.
- 🔥 **Trending Leaderboard Top 5:** Auto-calculates average ratings and ranks top 5 movies with gold, silver, and bronze leaderboard badges.
- 🌙 **Persistent Dark / Light Theme:** Custom glassmorphic styling system with smooth theme toggling stored in `localStorage`.
- 📱 **Fully Responsive Layout:** Optimized grid layouts, sticky navigation bar, and multi-column footer for all screen sizes.
- 🚀 **Deployment Ready:** Configured for cloud hosting on **Render**, **Railway**, and **MongoDB Atlas**.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js (v5), Mongoose (v9), Method-Override, Dotenv
* **AI Integration:** `@google/genai` (Gemini Flash API)
* **Frontend:** EJS (Embedded JavaScript), Vanilla CSS3 (Glassmorphism & Variables), Bootstrap 5.3, FontAwesome 6.5
* **Database:** MongoDB (Local / MongoDB Atlas)

---

## 📁 Project Structure

```text
Lec16-Movies/
├── models/
│   └── movieModel.js      # Mongoose schema for movies and embedded ratings
├── public/
│   ├── script.js          # Client-side theme toggle script
│   └── style.css          # Glassmorphic CSS design system
├── views/
│   ├── edit.ejs           # Edit movie form template
│   ├── footer.ejs         # Multi-column footer template
│   ├── header.ejs         # Head metadata & navbar template
│   ├── index.ejs          # Main movie grid & hero banner
│   ├── navbar.ejs         # Glassmorphic navigation bar
│   ├── new.ejs            # Add new movie form template
│   ├── show.ejs           # Movie detail view & review form
│   ├── summary.ejs        # Gemini AI summary view
│   └── topMovies.ejs      # Trending top 5 leaderboard
├── .env                   # Environment secrets (API keys & DB URL)
├── .gitignore             # Ignored files (node_modules, .env)
├── movies.js              # Express server entry point & routes
├── package.json           # Dependencies and start script
├── seed.js                # Database seeder script
└── README.md              # Project documentation
```

---

## ⚡ Quick Start

### 1. Prerequisites
Ensure you have installed:
* [Node.js](https://nodejs.org/) (v18 or higher)
* [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas account)

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/movieAdda.git
cd movieAdda
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:

```env
PORT=3000
GEMINI_API_KEY=your_google_gemini_api_key_here
MONGODB_URI=mongodb://127.0.0.1:27017/movies
```

### 4. Running the Application

* **Development Mode (with Nodemon):**
  ```bash
  npx nodemon movies.js
  ```

* **Production Mode:**
  ```bash
  npm start
  ```

Open your browser and navigate to `http://localhost:3000`.

---

## ☁️ Deployment Guide

### Deploying to Render.com

1. Push your project to a GitHub repository.
2. Sign in to [Render.com](https://render.com) and create a **New Web Service**.
3. Select your repository and configure:
   * **Build Command:** `npm install`
   * **Start Command:** `npm start`
4. In the **Environment Variables** section, add:
   * `GEMINI_API_KEY`: *(Your Google Gemini API Key)*
   * `MONGODB_URI`: *(Your MongoDB Atlas Connection String)*
5. Click **Deploy Web Service** to launch your live site!

---

## 📝 License

This project is licensed under the **ISC License**.
