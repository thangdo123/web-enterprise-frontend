import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { checkAccessToken } from "../../../utils/cookies.utils";

export const getContributionPercentageByFaculty = createAsyncThunk(
  "statistic/getContributionPercentageByFaculty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.PERCENTAGE_BY_FACULTY,
      );
      checkAccessToken(response.data.accessToken);
      console.log(response.data);
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
      checkAccessToken(response.data.accessToken);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getTotalContributions = createAsyncThunk(
  "contributions/getTotalContributions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.TOTAL_CONTRIBUTIONS,
      );
      checkAccessToken(response.data.accessToken);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getTotalContributionsToday = createAsyncThunk(
  "contributions/getTotalContributionsToday",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.TOTAL_CONTRIBUTIONS_TODAY,
      );
      checkAccessToken(response.data.accessToken);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getTotalCoordinators = createAsyncThunk(
  "coordinators/getTotalCoordinators",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.TOTAL_COORDINATORS_IN_FACULTY,
      );
      checkAccessToken(response.data.accessToken);
      console.log(response.data);
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
    contributionsByFaculty: [],
  },
  statsByFacultyAndYear: {},
  totalContributions: undefined,
  newContributions: undefined,
  totalCoordinators: undefined,
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
    builder.addCase(getTotalContributions.fulfilled, (state, action) => {
      state.totalContributions = action.payload.totalContributions;
    });
    builder.addCase(getTotalContributionsToday.fulfilled, (state, action) => {
      state.newContributions = action.payload.newContributions;
    });
    builder.addCase(getTotalCoordinators.fulfilled, (state, action) => {
      state.totalCoordinators = action.payload.totalCoordinators;
    });
  },
});
