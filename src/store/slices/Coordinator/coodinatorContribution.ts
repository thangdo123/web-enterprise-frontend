import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { ICoordinatorContributionState } from "../../../interfaces/coordinatorContribution";

const initialState: ICoordinatorContributionState = {
  contribution: [],
};

export const fetchAllContributionsByFaculty = createAsyncThunk(
  "contributions/fetchAllContributionsByFaculty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.COORDINATOR.VIEW_ALL_CONTRIBUTION,
      );

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const coordinatorContributionState = createSlice({
  name: "coordinatorContributionState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllContributionsByFaculty.pending, (state) => {
      state.contribution = [];
    });
    builder.addCase(
      fetchAllContributionsByFaculty.fulfilled,
      (state, action) => {
        state.contribution = action.payload.contribution;
      },
    );
    builder.addCase(fetchAllContributionsByFaculty.rejected, (state) => {
      state.contribution = [];
    });
  },
});
