import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IChosenContributionState } from "../../../interfaces/chosenContribution";
import { checkAccessToken } from "../../../utils/cookies.utils";

export const getAllChosenContributions = createAsyncThunk(
  "contributions/getAllChoosenContributions",
  async (
    { sort, title }: { sort: string; title: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL +
          API_ENDPOINTS.MANAGER.CHOSEN_CONTRIBUTIONS +
          `/?sort=${sort}&title=${title}`,
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

export const downloadContributions = createAsyncThunk(
  "contributions/downloadContributions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.MANAGER.DOWNLOAD_CONTRIBUTIONS,
        {
          responseType: "blob", // Important for handling binary data
        },
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);

      const blob = new Blob([response.data], { type: "application/zip" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "output.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();

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
      checkAccessToken(response.data.accessToken);
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
  extraReducers: (builder) => {
    builder.addCase(getAllChosenContributions.fulfilled, (state, action) => {
      state.allChosenContributions = action.payload.allChosenContributions;
    });
    builder.addCase(downloadContributions.fulfilled, (state) => {
      state.isDownloading = true;
    });
    /* eslint-disable */
    builder.addCase(publishContribution.fulfilled, (state, action) => {
      state.allChosenContributions = state.allChosenContributions.map(
        (chosenContributions) =>
          chosenContributions.map((chosenContribution) =>
            chosenContribution.id === action.payload.contribution.id
              ? {
                  ...chosenContribution,
                  user: {
                    ...chosenContribution.user,
                    name: action.payload.user,
                  },
                  is_public: action.payload.contribution.is_public,
                }
              : chosenContribution,
          ),
      );
    });
  },
});
