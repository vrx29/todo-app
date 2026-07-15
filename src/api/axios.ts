import axios from "axios";
import { refreshApi } from "./auth.apis";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ACCESS_TOKEN_KEY");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("REFRESH_TOKEN_KEY") ?? "";
        const { accessToken } = await refreshApi({ refreshToken });

        localStorage.setItem("ACCESS_TOKEN_KEY", accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (error) {}
    }
    return Promise.reject(error);
  },
);

export default api;
