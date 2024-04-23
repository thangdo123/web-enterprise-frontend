import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, axiosInstanceFormData } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IAccount } from "../../interfaces/account.interfaces";
import { setCookie } from "../../utils/cookies.utils";

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.USER.VIEW_PROFILE,
      );
      console.log(response.data);
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
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

interface IProfileState {
  userProfile: IAccount;
}

const initialState: IProfileState = {
  userProfile: { name: "", email: "", role: "" },
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
      console.log(action.payload.accessToken);
      if (action.payload.accessToken) {
        setCookie("token", action.payload.accessToken);
        location.reload();
      }
    });
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload.user;
    });
  },
});
