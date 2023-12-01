// config/dbConfig.js
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

// // Load environment variables from .env file
// require('dotenv').config();

// // Use process.env.MONGO_URL to get the MongoDB connection string
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //useCreateIndex: true, // Add this line
// });

mongoose.connect("mongodb+srv://bacoldeannahaws:aDdF5EGN9luxZFfz@cluster0.pbdtb2q.mongodb.net/MovieReservation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true, // Add this line
});

const connection = mongoose.connection;

connection.on('connected', () => console.log('MongoDB connected successfully'));
connection.on('error', (err) => console.error('MongoDB connection error:', err));

module.exports = connection;