import axios, { InternalAxiosRequestConfig } from "axios";
import { API_BASE_URL } from "../config/api";
import { getCookie } from "../utils/cookies.utils";

const updateHeaders = (config: InternalAxiosRequestConfig) => {
  const token = getCookie("token");
  if (token) {
    config.headers!["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosInstanceFormData = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use(
  (config) => updateHeaders(config),
  (error) => Promise.reject(error),
);

axiosInstanceFormData.interceptors.request.use(
  (config) => updateHeaders(config),
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    const message =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      (error?.response?.data?.errors && error.response.data.errors[0].msg) ||
      error?.message ||
      "Something went wrong!";
    return Promise.reject(message);
  },
);

axiosInstanceFormData.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    const message =
      error?.response?.data?.error ||
      error?.response?.data?.message ||
      (error?.response?.data?.errors && error.response.data.errors[0].msg) ||
      "Only .docx, .jpg, .jpeg, .png, and .gif files are allowed";
    return Promise.reject(message);
  },
);
