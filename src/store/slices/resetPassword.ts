import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";

export const sendOtp = createAsyncThunk(
  "otp/sendOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.USER.SEND_OTP,
        { email },
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const resetPassword = createAsyncThunk(
  "password/resetPassword",
  async (
    {
      otp,
      email,
      newPassword,
      reNewPassword,
    }: {
      email: string;
      otp: string;
      newPassword: string;
      reNewPassword: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL + API_ENDPOINTS.USER.RESET_PASSWORD,
        { otp, email, newPassword, reNewPassword },
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);
