import axios from "axios";

export const axiosInstance = axios.create({
  baseURL
      : "https://fullstack-chat-app-backend-three.vercel.app/api",
  withCredentials: true,
});
