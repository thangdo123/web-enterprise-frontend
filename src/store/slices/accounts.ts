import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IAccountState } from "../../interfaces/account.interfaces";

export const fetchAllAccounts = createAsyncThunk(
  "accounts/fetchAllAcounts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ACCOUNTS,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

const initialState: IAccountState = {
  accounts: [],
};

export const accountState = createSlice({
  name: "accountState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllAccounts.pending, (state) => {
      state.accounts = [];
    });
    builder.addCase(fetchAllAccounts.fulfilled, (state, action) => {
      state.accounts = action.payload;
    });
    builder.addCase(fetchAllAccounts.rejected, (state) => {
      state.accounts = [];
    });
  },
});
