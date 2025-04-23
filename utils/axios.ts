import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL, // Replace with your API
  timeout: 30000, // Request timeout (10 seconds)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (window && localStorage) {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.token = token;
      }
    }
    config.headers["Accept-Language"] = "en";
    config.headers["api_key"] = process.env.NEXT_PUBLIC_BACKEND_API_V1_KEY;
    return config;
  },
  (error) => {
    console.log(error);
    toast.error("Request failed! Please try again.");
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.message && !error.response) {
      toast.error("Something went wrong!");
    }
    if (!error.response) {
      toast.error(error.response.data.detail);
    } else if (error.response.status === 401) {
      toast.error(error.response.data.detail);
    } else if (error.response.status === 500) {
      if (error.response.data.detail) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Something went wrong!");
      }
    } else {
      toast.error(error.response.data.detail);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
