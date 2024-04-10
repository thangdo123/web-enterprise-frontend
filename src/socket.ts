import { io } from "socket.io-client";
import { API_BASE_URL } from "./config/api";
import { getCookie } from "./utils/cookies.utils";

const token = getCookie("token");

const socket = io(API_BASE_URL, {
  extraHeaders: {
    "access-token": token,
  },
});

socket.on("connect", () => {
  console.log("connect");
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

export default socket;
