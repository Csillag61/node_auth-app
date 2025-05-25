import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // Your backend URL
});

// Register User
export const register = async (userData) => {
  const response = await API.post('/register', userData);
  return response.data;
};

// Login User
export const login = async (credentials) => {
  const response = await API.post('/login', credentials);
  return response.data;
};
