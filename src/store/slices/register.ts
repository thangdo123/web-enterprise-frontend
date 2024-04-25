import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthState, IRegister } from "../../interfaces";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";

export const registerAsGuest = createAsyncThunk(
  "register/registerAsGuest",
  async (data: IRegister, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.GUEST.REGISTER,
        data,
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

const initialState: IAuthState = {
  authStatus: false,
};

export const registerState = createSlice({
  name: "registerState",
  initialState,
  reducers: {
    clearAuthStatus: (state) => {
      state.authStatus = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerAsGuest.pending, (state) => {
      state.authStatus = false;
    });
    builder.addCase(registerAsGuest.fulfilled, (state) => {
      state.authStatus = true;
    });
    builder.addCase(registerAsGuest.rejected, (state) => {
      state.authStatus = false;
    });
  },
});

export const { clearAuthStatus } = registerState.actions;
