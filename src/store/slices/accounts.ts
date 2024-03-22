import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IAccount, IAccountState } from "../../interfaces/account.interfaces";

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

export const createAccount = createAsyncThunk(
  "accounts/createAccount",
  async ({ name, email, role }: IAccount, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.CREATE_ACCOUNTS,
        { name, email, role, avatar: "sd" },
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const initialState: IAccountState = {
  accounts: {
    account: [],
  },
};

export const accountState = createSlice({
  name: "accountState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllAccounts.pending, (state) => {
      state.accounts.account = [];
    });
    builder.addCase(fetchAllAccounts.fulfilled, (state, action) => {
      state.accounts = action.payload;
      console.log(action.payload);
    });
    builder.addCase(fetchAllAccounts.rejected, (state) => {
      state.accounts.account = [];
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      const { account } = state.accounts;
      const accountsWithLessThan10 = account.find((arr) => arr.length < 10);

      if (accountsWithLessThan10) {
        accountsWithLessThan10.push(action.payload.user);
      } else {
        state.accounts.account.push([action.payload.user]);
      }
    });
  },
});
