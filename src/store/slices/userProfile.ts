import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, axiosInstanceFormData } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IAccount } from "../../interfaces/account.interfaces";
import { checkAccessToken, setCookie } from "../../utils/cookies.utils";
import { ILogin } from "../../interfaces";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.USER.VIEW_PROFILE,
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const getAdminProfile = createAsyncThunk(
  "admin/getAdminProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ADMIN.VIEW_ADMIN_PROFILE,
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  "user/updateUserProfile",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceFormData.put(
        API_BASE_URL + API_ENDPOINTS.USER.UPDATE_PROFILE,
        formData,
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const postLogin = createAsyncThunk(
  "user/postLogin",
  async (data: ILogin, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.AUTH.LOGIN,
        data,
      );
      setCookie("token", response.data.token);
      dispatch(getUserProfile());
      dispatch(getAdminProfile());
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

interface IProfileState {
  userProfile: IAccount | null;
}

const initialState: IProfileState = {
  userProfile: null,
};

export const userProfileState = createSlice({
  name: "userProfileState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload.userProfile;
    });
    builder.addCase(getAdminProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload.userProfile;
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload.user;
    });
  },
});
