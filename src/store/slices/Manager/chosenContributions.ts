import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IChosenContributionState } from "../../../interfaces/chosenContribution";

export const getAllChosenContributions = createAsyncThunk(
  "contributions/getAllChoosenContributions",
  async (sort: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL +
          API_ENDPOINTS.MANAGER.CHOSEN_CONTRIBUTIONS +
          `/?sort=${sort}`,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const downloadContributions = createAsyncThunk(
  "contributions/downloadContributions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.DOWNLOAD_CONTRIBUTIONS,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const publishContribution = createAsyncThunk(
  "contribution/publishContribution",
  async ({ Id }: { Id: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL + API_ENDPOINTS.MANAGER.PUBLISH_CONTRIBUTION + Id,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const initialState: IChosenContributionState = {
  allChosenContributions: [],
  isDownloading: false,
};

export const chosenContributionState = createSlice({
  name: "chosenContributionState",
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(getAllChosenContributions.fulfilled, (state, action) => {
      state.allChosenContributions = action.payload.allChosenContributions;
    });
    buider.addCase(downloadContributions.fulfilled, (state) => {
      state.isDownloading = true;
    });
    buider.addCase(publishContribution.fulfilled, (state, action) => {
      state.allChosenContributions = state.allChosenContributions.map(
        (chosenContributions) =>
          chosenContributions.map((chosenContribution) =>
            chosenContribution.id === action.payload.contribution.id
              ? action.payload.contribution
              : chosenContribution,
          ),
      );
    });
  },
});
