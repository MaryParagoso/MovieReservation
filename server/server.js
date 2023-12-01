// server/server.js
const express = require('express');
const cors = require('cors');
const dbConnection = require('./config/dbConfig');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Your routes will be added here
// Example route:
app.use('/api/movies', require('./routes/movies'));

app.listen(port, () => console.log(`NodeJS server is running on ${port}`));
