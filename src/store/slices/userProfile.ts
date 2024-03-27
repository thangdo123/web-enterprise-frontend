import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IAccount } from "../../interfaces/account.interfaces";

export const getAdminProfile = createAsyncThunk(
  "admin/getAdminProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.VIEW_PROFILE,
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const updateAdminProfile = createAsyncThunk(
  "admin/updateAdminProfile",
  async ({ Id, name }: { Id: string; name: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL + API_ENDPOINTS.UPDATE_PROFILE + Id,
        { name },
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

interface IAdminProfileState {
  userProfile: IAccount;
}

const initialState: IAdminProfileState = {
  userProfile: { name: "", email: "", role: "" },
};

export const adminProfileState = createSlice({
  name: "adminProfileState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAdminProfile.fulfilled, (state, action) => {
      state.userProfile = action.payload.userProfile;
    });
  },
});
