// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://converg-production-28fb.up.railway.app', // replace with your actual base URL
});

export default axiosInstance;
