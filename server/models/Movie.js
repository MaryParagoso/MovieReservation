// models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  genre: { type: String, required: true },
  poster: { type: String, required: true },
  time: { type: String, required: true },
  cinema_number: { type: Number, required: true },
  date: { type: Date, required: true },
  isPremium: { type: Boolean, default: false },
});

const Movie = mongoose.model('movie', movieSchema, 'Movie-List');

module.exports = Movie;