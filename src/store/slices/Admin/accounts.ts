import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import {
  IAccount,
  IAccountState,
} from "../../../interfaces/account.interfaces";
import { checkAccessToken } from "../../../utils/cookies.utils";

export const fetchAllAccounts = createAsyncThunk(
  "accounts/fetchAllAcounts",
  async (role: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ADMIN.ACCOUNTS + `/?role=${role}`,
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

export const searchAccount = createAsyncThunk(
  "accounts/fetchAllAcounts",
  async (input: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ADMIN.ACCOUNTS + `/?email=&name=${input}`,
      );
      checkAccessToken(response.data.accessToken);
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
        API_BASE_URL + API_ENDPOINTS.ADMIN.CREATE_ACCOUNTS,
        {
          name,
          email,
          role,
          avatar: "",
          faculty,
        },
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const updateAccountById = createAsyncThunk(
  "accounts/updateAccount",
  async (
    { name, Id, is_locked }: { name: string; Id: string; is_locked: boolean },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL + API_ENDPOINTS.ADMIN.EDIT_ACCOUNT + Id,
        { name, is_locked, avatar: "sdfsd" },
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const initialState: IAccountState = {
  account: [],
};

export const accountState = createSlice({
  name: "accountState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllAccounts.pending, (state) => {
      state.account = [];
    });
    builder.addCase(fetchAllAccounts.fulfilled, (state, action) => {
      state.account = action.payload.account;
    });
    builder.addCase(fetchAllAccounts.rejected, (state) => {
      state.account = [];
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      const { account } = state;
      const accountsWithLessThan10 = account.find((arr) => arr.length < 10);

      if (accountsWithLessThan10) {
        accountsWithLessThan10.push(action.payload.user);
      } else {
        state.account.push([action.payload.user]);
      }
    });
    builder.addCase(updateAccountById.fulfilled, (state, action) => {
      state.account = state.account.map((listOfAccounts) =>
        listOfAccounts.map((account) =>
          account.id === action.meta.arg.Id
            ? action.payload.updatedUser
            : account,
        ),
      );
    });
  },
});
