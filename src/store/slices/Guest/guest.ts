import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IGuestState } from "../../../interfaces/guest.interface";
import { checkAccessToken } from "../../../utils/cookies.utils";

const initialState: IGuestState = {
  faculties: [],
  allPublicContributions: [],
  isLoading: true,
};

export const fetchAllGuestFaculty = createAsyncThunk(
  "faculties/fetchAllGuestFaculties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.GUEST.GET_FACULTY,
      );
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const fetchAllPublishedContributionInFaculty = createAsyncThunk(
  "faculties/fetchAllPublishedContributionInFaculty",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.GUEST.GET_FACULTY + id,
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

export const guestState = createSlice({
  name: "guestState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllGuestFaculty.pending, (state) => {
      state.faculties = [];
    });
    builder.addCase(fetchAllGuestFaculty.rejected, (state) => {
      state.faculties = [];
    });
    builder.addCase(fetchAllGuestFaculty.fulfilled, (state, action) => {
      state.faculties = action.payload.faculties;
    });
    builder.addCase(fetchAllPublishedContributionInFaculty.pending, (state) => {
      state.allPublicContributions = [];
      state.isLoading = true;
    });
    builder.addCase(
      fetchAllPublishedContributionInFaculty.rejected,
      (state) => {
        state.allPublicContributions = [];
      },
    );
    builder.addCase(
      fetchAllPublishedContributionInFaculty.fulfilled,
      (state, action) => {
        state.allPublicContributions = action.payload.allPublicContributions;
        state.isLoading = false;
      },
    );
  },
});
