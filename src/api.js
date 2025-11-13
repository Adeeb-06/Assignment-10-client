// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://assignment-10-server-xi-five.vercel.app/", // <-- change once here if URL changes
});

export default api;
