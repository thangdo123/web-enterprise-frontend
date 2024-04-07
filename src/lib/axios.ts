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
    // "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});

export const axiosInstanceFormData = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    // "Authorization": `Bearer ${token}`,
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
