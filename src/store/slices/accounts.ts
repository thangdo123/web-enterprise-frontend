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

export const sortAccounts = createAsyncThunk(
  "accounts/fetchAllAcounts",
  async (role: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ACCOUNTS + `/?role=${role}`,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const searchAccount = createAsyncThunk(
  "accounts/fetchAllAcounts",
  async (input: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL +
          API_ENDPOINTS.ACCOUNTS +
          `/?email=${input}&name=${input}`,
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
  async ({ name, email, role, faculty }: IAccount, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.CREATE_ACCOUNTS,
        {
          name,
          email,
          role,
          avatar: "sd",
          faculty,
        },
      );
      console.log(response.data);
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
