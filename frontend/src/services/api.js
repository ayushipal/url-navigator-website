import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const uploadFile = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post("/upload", formData);
};

export const fetchGoogleSheet = (url) => {
  return API.post("/google-sheet", { url });
};