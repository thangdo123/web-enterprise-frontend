import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IChosenContributionState } from "../../../interfaces/chosenContribution";
import { setCookie } from "../../../utils/cookies.utils";

export const getAllExceptionReports = createAsyncThunk(
  "exceptionReports/getAllExceptionReports",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.EXCEPTION_REPORTS,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  },
);

const initialState: IChosenContributionState = {
  allChosenContributions: [],
  isDownloading: false,
};

export const exceptionReportsState = createSlice({
  name: "exceptionReportsState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllExceptionReports.fulfilled, (state, action) => {
      state.allChosenContributions = action.payload.allContributions;
      if (action.payload.accessToken) {
        setCookie("token", action.payload.accessToken);
        location.reload();
      }
    });
  },
});
