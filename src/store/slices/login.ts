import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { setCookie } from "../../utils/cookies.utils";
import { IAuthState, ILogin } from "../../interfaces";

export const postLogin = createAsyncThunk(
  "type/postData",
  async (data: ILogin, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.AUTH.LOGIN,
        data,
      );
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

export const loginState = createSlice({
  name: "loginState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.authStatus = false;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.authStatus = true;
      console.log(1);
      setCookie("token", action.payload.token);
    });
    /* eslint-disable*/
    builder.addCase(postLogin.rejected, (state, action: any) => {
      state.authStatus = false;
    });
  },
});
