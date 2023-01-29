import axios from "axios";
export const BASE_URL =
  process.env.NODE_ENV !== "development"
    ? "https://dev-shall.vercel.app"
    : "http://localhost:3000";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api`,
  // timeout : 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
