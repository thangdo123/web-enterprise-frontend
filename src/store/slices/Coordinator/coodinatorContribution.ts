import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { ICoordinatorContributionState } from "../../../interfaces/coordinatorContribution";

const initialState: ICoordinatorContributionState = {
  allMyContributions: [],
  detailContribution: {
    contribution: {
      title: "",
      description: "",
      createdAt: "",
    },
    academicYear: {
      closure_date: "",
    },
    document: [
      {
        name: "",
      },
    ],
    image: [
      {
        name: "",
      },
    ],
    comment: [
      {
        content: "",
      },
    ],
  },
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

export const fetchContributionDetailCoordinator = createAsyncThunk(
  "contribution/fetchContributionDetailCoordinator",
  async (contributionId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.USER.CONTRIBUTIONS + contributionId,
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const giveComment = createAsyncThunk(
  "contribution/giveComment",
  async ({content, id}: {content: string, id:string}, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.GIVE_COMMENT + id,
        {content},
      );
      console.log(response.data);
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
      state.allMyContributions = [];
    });
    builder.addCase(
      fetchAllContributionsByFaculty.fulfilled,
      (state, action) => {
        state.allMyContributions = action.payload.allMyContributions;
      },
    );
    builder.addCase(fetchAllContributionsByFaculty.rejected, (state) => {
      state.allMyContributions = [];
    });
    builder.addCase(
      fetchContributionDetailCoordinator.fulfilled,
      (state, action) => {
        state.detailContribution = action.payload;
      },
    );
    builder.addCase(giveComment.fulfilled, (state, action) => {
      state.detailContribution.comment.push(action.payload);
    });
  },
});
