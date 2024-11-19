import axios from 'axios';

const API_KEY = '53a76e5a';
const BASE_URL = 'http://www.omdbapi.com/';

export const searchMovies = async (query, type = '', page = 1) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        type: type,
        page: page,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { Response: 'False', Error: error.message };
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        plot: 'full',
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return { Response: 'False', Error: error.message };
  }
};
