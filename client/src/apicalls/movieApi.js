// src/apicalls/movieApi.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';


const movieApi = {
  getMovies: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movies`);
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },

  // Add more API functions as needed
};

export default movieApi;
