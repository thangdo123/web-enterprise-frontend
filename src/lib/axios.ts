import axios from "axios";
import { API_BASE_URL } from "../config/api";
import { getCookie } from "../utils/cookies";

const token = getCookie("token");

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
