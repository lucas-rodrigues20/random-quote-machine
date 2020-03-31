import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fcc-random-quote-api.glitch.me'
});

export default api;
