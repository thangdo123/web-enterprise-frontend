import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, axiosInstanceFormData } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IContributionState } from "../../interfaces/contribution.interface";

const initialState: IContributionState = {
  contribution: [],
};

export const fetchAllContributions = createAsyncThunk(
  "contributions/fetchAllContributions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.CONTRIBUTIONS,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);


// interface IUploadContribution{
//   title: string,
//   description: string,
//   image: File[],
//   document: File[],
// }

export const createContribution = createAsyncThunk(
  "contributions/createContributions",
  async (formData : FormData, { rejectWithValue }) =>{
    try{
      const response = await axiosInstanceFormData.post(
        API_BASE_URL + API_ENDPOINTS.UPLOAD_CONTRIBUTION,
        formData,
      );
      
      console.log(response.data);
      return response.data;
    } catch(err){
      return rejectWithValue(err);
    }
  }
);

export const contributionState = createSlice({
  name: "contributionState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllContributions.pending, (state) => {
      state.contribution = [];
    });
    builder.addCase(fetchAllContributions.fulfilled, (state, action) => {
      state.contribution = action.payload.contribution;
    });
    builder.addCase(fetchAllContributions.rejected, (state) => {
      state.contribution = [];
    });
    // builder.addCase(createContribution.fulfilled, (state, action) => {
    //   const { contribution } = state;
    //   const arrayWithLengthLowerThan10 = contribution.find(
    //     (arr) => arr.length < 10,
    //   );

    //   if(arrayWithLengthLowerThan10){
    //     arrayWithLengthLowerThan10.push(action.payload.newContribution);
    //   }else{
    //     state.contribution.push([action.payload.newContribution]);
    //   }
    // });
  },
});
