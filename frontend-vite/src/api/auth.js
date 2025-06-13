import API from '../utils/axios';

// Register a new user
export const registerUser = async (userData) => {
  const res = await API.post('/auth/register', userData);
  return res.data;
};

// Login
export const loginUser = async (credentials) => {
  const res = await API.post('/auth/login', credentials);
  return res.data;
};
