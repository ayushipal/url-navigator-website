import axios from "axios";

// Use environment variable for backend URL
const BASE_URL = process.env.REACT_APP_API_URL; 

const API = axios.create({
  baseURL: `${BASE_URL}/api`,  // dynamically points to backend
});

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/upload", formData);
};

export const fetchGoogleSheet = (url) => {
  return API.post("/google-sheet", { url });
};