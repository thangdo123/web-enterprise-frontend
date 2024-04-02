import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, axiosInstanceFormData } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IContributionState } from "../../../interfaces/contribution.interface";

const initialState: IContributionState = {
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

export const fetchAllContributions = createAsyncThunk(
  "contributions/fetchAllContributions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.USER.CONTRIBUTIONS,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const fetchContributionDetail = createAsyncThunk(
  "contribution/fetchContributionDetail",
  async (contributionId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.USER.CONTRIBUTIONS + contributionId,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const createContribution = createAsyncThunk(
  "contributions/createContributions",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceFormData.post(
        API_BASE_URL + API_ENDPOINTS.USER.UPLOAD_CONTRIBUTION,
        formData,
      );

      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const editContribution = createAsyncThunk(
  "contributions/editContributions",
  async ({id, formData} : {id: string, formData: FormData}, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceFormData.put(
        API_BASE_URL + API_ENDPOINTS.USER.EDIT_CONTRIBUTION + id,
        formData,
      );

      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteContribution = createAsyncThunk(
  "contributions/deleteContribution",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        API_BASE_URL + API_ENDPOINTS.USER.DELETE_CONTRIBUTION + id,
      );
      console.log(API_BASE_URL + API_ENDPOINTS.USER.DELETE_CONTRIBUTION + id);
      console.log(response.data);
      return response.data;
    } catch(err) {
      return rejectWithValue(err);
    }
  },
);

export const contributionState = createSlice({
  name: "contributionState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllContributions.pending, (state) => {
      state.allMyContributions = [];
    });
    builder.addCase(fetchAllContributions.fulfilled, (state, action) => {
      state.allMyContributions = action.payload.allMyContributions;
    });
    builder.addCase(fetchAllContributions.rejected, (state) => {
      state.allMyContributions = [];
    });
    builder.addCase(fetchContributionDetail.fulfilled, (state, action) => {
      state.detailContribution = action.payload;
    });
  },
});
