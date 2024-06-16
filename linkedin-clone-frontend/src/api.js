import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // adapte l'URL selon la configuration du backend
});

export default api;
