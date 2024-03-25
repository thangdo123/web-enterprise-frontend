import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { setCookie } from "../../utils/cookies";

interface ILogin {
  email: string;
  password: string;
}
export const postLogin = createAsyncThunk(
  "type/postData",
  async (data: ILogin, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.LOGIN,
        data,
      );
      console.log(response);
      return response.data.token;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

interface ILoginState {
  isLoggedin: boolean;
}

const initialState: ILoginState = {
  isLoggedin: false,
};

export const loginState = createSlice({
  name: "loginState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.isLoggedin = false;
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.isLoggedin = true;
      setCookie("token", action.payload);
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.isLoggedin = false;
    });
  },
});
