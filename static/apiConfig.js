/** @format */

// apiConfig.js
export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://3.128.254.241/"
    : "http://localhost:8000/";
