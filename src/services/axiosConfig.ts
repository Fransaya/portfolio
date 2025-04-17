// src/services/axiosConfig.ts
import axios from "axios";

const baseUrl =
  import.meta.env.VITE_PRODUCTION == 0
    ? "http://localhost:3000/"
    : "https://portfolio-backend-zltj.onrender.com";

// Configura Axios con una base URL y opciones comunes
const axiosInstance = axios.create({
  baseURL: baseUrl, // Cambia esto por la URL de tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
