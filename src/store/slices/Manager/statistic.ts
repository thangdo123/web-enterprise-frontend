import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";

export const getContributionsStatsByFacultyAndYear = createAsyncThunk(
  "statistic/getContributionsStatsByFacultyAndYear",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.STATS_BY_FACULTY_AND_YEAR,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getContributionPercentageByFaculty = createAsyncThunk(
  "statistic/getContributionPercentageByFaculty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.PERCENTAGE_BY_FACULTY,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getCountContributionsStats = createAsyncThunk(
  "statistic/getCountContributionsStats",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.COUNT_CONTRIBUTION,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const initialState = {
  percentage: {},
  countContribution: {
    totalContributions: "",
    contributionsByFaculty: {},
  },
  statsByFacultyAndYear: {},
};

export const statisticState = createSlice({
  name: "statisticState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getContributionPercentageByFaculty.fulfilled,
      (state, action) => {
        state.percentage = action.payload;
      },
    );
    builder.addCase(getCountContributionsStats.fulfilled, (state, action) => {
      state.countContribution = action.payload;
    });
    builder.addCase(
      getContributionsStatsByFacultyAndYear.fulfilled,
      (state, action) => {
        state.statsByFacultyAndYear = action.payload;
      },
    );
  },
});
