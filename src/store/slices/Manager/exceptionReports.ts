import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IChosenContributionState } from "../../../interfaces/chosenContribution";
import { checkAccessToken } from "../../../utils/cookies.utils";

export const getAllExceptionReports = createAsyncThunk(
  "exceptionReports/getAllExceptionReports",
  async (sort: boolean | string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL +
          API_ENDPOINTS.MANAGER.EXCEPTION_REPORTS +
          `?in14days=${sort}`,
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
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
    });
  },
});
