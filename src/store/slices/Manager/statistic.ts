import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";

export const getContributionsStatsByFacultyAndYear = createAsyncThunk(
  "statistic/getContributionsStatsByFacultyAndYear",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.STATS_BY_FACULTY_AND_YEAR,
      );
      console.log(response.data);
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);
