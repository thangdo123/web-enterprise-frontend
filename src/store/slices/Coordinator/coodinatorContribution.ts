import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { ICoordinatorContributionState } from "../../../interfaces/coordinatorContribution";
import { checkAccessToken } from "../../../utils/cookies.utils";

const initialState: ICoordinatorContributionState = {
  allMyContributions: [],
  detailContribution: {
    contribution: {
      title: "",
      description: "",
      createdAt: "",
      is_choosen: undefined,
    },
    academicYear: {
      closure_date: "",
    },
    document: [
      {
        name: "",
        path: "",
      },
    ],
    image: [
      {
        name: "",
        path: "",
      },
    ],
    comment: [
      {
        content: "",
      },
    ],
  },
  notifications: [],
  count: 0,
  isLoading: true,
};

export const fetchNotificationCount = createAsyncThunk(
  "coordinator/getNotiCount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.COORDINATOR.GET_NOTIFICATION_COUNT,
      );
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const fetchNotifications = createAsyncThunk(
  "coordinator/fetchNotifications",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.COORDINATOR.VIEW_NOTIFICATIONS,
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

export const fetchAllContributionsByFaculty = createAsyncThunk(
  "contributions/fetchAllContributionsByFaculty",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.COORDINATOR.VIEW_ALL_CONTRIBUTION,
      );
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const searchContributions = createAsyncThunk(
  "contribution/searchContributions",
  async ( keyword: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.COORDINATOR.SEARCH_CONTRIBUTIONS + keyword,
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

export const fetchContributionDetailCoordinator = createAsyncThunk(
  "contribution/fetchContributionDetailCoordinator",
  async (contributionId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.USER.CONTRIBUTIONS + contributionId,
      );
      checkAccessToken(response.data.accessToken);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const giveComment = createAsyncThunk(
  "contribution/giveComment",
  async (
    { content, id }: { content: string; id: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.GIVE_COMMENT + id,
        { content },
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

export const chooseContribution = createAsyncThunk(
  "contribution/chooseContribution",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL + API_ENDPOINTS.COORDINATOR.CHOOSE_CONTRIBUTION + id,
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

export const coordinatorContributionState = createSlice({
  name: "coordinatorContributionState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllContributionsByFaculty.pending, (state) => {
      state.allMyContributions = [];
      state.isLoading = true;
    });
    builder.addCase(
      fetchAllContributionsByFaculty.fulfilled,
      (state, action) => {
        state.allMyContributions = action.payload.allMyContributions;
        state.isLoading = false;
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
    builder.addCase(chooseContribution.fulfilled, (state, action) => {
      state.detailContribution.contribution.is_choosen =
        action.payload.chosenContribution.is_choosen;
    });
    builder.addCase(fetchNotificationCount.fulfilled, (state, action) => {
      state.count = action.payload.count;
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload.notifications;
    });
    builder.addCase(searchContributions.pending, (state) => {
      state.allMyContributions = [];
      state.isLoading = true;
    });
    builder.addCase(
      searchContributions.fulfilled,
      (state, action) => {
        state.allMyContributions = action.payload.allMyContributions;
        state.isLoading = false;
      },
    );
    builder.addCase(searchContributions.rejected, (state) => {
      state.allMyContributions = [];
    });
  },
});
