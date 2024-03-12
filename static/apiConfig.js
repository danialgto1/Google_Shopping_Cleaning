/** @format */

// apiConfig.js
export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? window.location.origin + "/"
    : "http://localhost:8000/";
