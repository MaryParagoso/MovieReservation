// routes/movies.js
const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Get all movies
router.get('/', async (req, res) => {
    console.log("test");
  try {
    const movies = await Movie.find({});
    console.log('Fetched Movies:', movies); // Add this line
    res.json(movies);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add more routes as needed (e.g., POST to add a new movie)

module.exports = router;