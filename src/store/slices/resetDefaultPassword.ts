import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";

export const resetDefaultPassword = createAsyncThunk(
  "reset/resetDefaultPassword",
  async (
    {
      email,
      default_pasword,
      newPassword,
      reNewPassword,
    }: {
      email: string;
      default_pasword: string;
      newPassword: string;
      reNewPassword: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL +
          API_ENDPOINTS.AUTH.RESET_DEFAULT_PASSWORD +
          `${email}/${default_pasword}`,
        { newPassword, reNewPassword },
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);
