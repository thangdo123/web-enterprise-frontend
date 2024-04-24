import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IAcademicYearsState } from "../../../interfaces/academicYear.interfaces";
import { checkAccessToken } from "../../../utils/cookies.utils";

export const fetchAcademicYears = createAsyncThunk(
  "academicYears/fetchAcademicYears",
  async (sort: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ADMIN.ACADEMIC_YEARS + `/?sort=${sort}`,
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

export const deleteAcademicYearById = createAsyncThunk(
  "academicYear/deleteAcademicYearById",
  async (academicYearId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        API_BASE_URL +
          API_ENDPOINTS.ADMIN.DELETE_ACADEMIC_YEARS +
          academicYearId,
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
      return academicYearId;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const updateAcademicYearById = createAsyncThunk(
  "academicYear/updateAcademicYearById",
  async (
    {
      academicYearId,
      closure_date,
      final_closure_date,
    }: {
      academicYearId: string;
      closure_date: string;
      final_closure_date: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL +
          API_ENDPOINTS.ADMIN.UPDATE_ACADEMIC_YEARS +
          academicYearId,
        { closure_date, final_closure_date },
      );
      console.log(response.data);
      checkAccessToken(response.data.accessToken);
      return academicYearId;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const createAcademicYear = createAsyncThunk(
  "academicYear/createAcademicYear",
  async (
    {
      closure_date,
      final_closure_date,
    }: {
      closure_date: string;
      final_closure_date: string;
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.ADMIN.CREATE_ACADEMIC_YEARS,
        { closure_date, final_closure_date },
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

const initialState: IAcademicYearsState = {
  allAcademicYears: [],
};

export const academicYearState = createSlice({
  name: "academicYearsState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAcademicYears.fulfilled, (state, action) => {
      state.allAcademicYears = action.payload.allAcademicYears;
    });
    builder.addCase(deleteAcademicYearById.fulfilled, (state, action) => {
      state.allAcademicYears = state.allAcademicYears.map((academicYears) =>
        academicYears.filter(
          (academicYear) => academicYear.id !== action.payload,
        ),
      );
    });
    /* eslint-disable */
    builder.addCase(updateAcademicYearById.fulfilled, (state, action) => {
      state.allAcademicYears = state.allAcademicYears.map((academicYears) =>
        academicYears.map((academicYear) =>
          academicYear.id === action.payload
            ? {
                ...academicYear,
                closure_date: action.meta.arg.closure_date,
                final_closure_date: action.meta.arg.final_closure_date,
              }
            : academicYear,
        ),
      );
    });
    /* eslint-disable */
    builder.addCase(createAcademicYear.fulfilled, (state, action) => {
      const { allAcademicYears } = state;
      const academicYearsWithLessThan10 = allAcademicYears.find(
        (arr) => arr.length < 10,
      );

      if (academicYearsWithLessThan10) {
        academicYearsWithLessThan10.push(action.payload.academicYear);
      } else {
        state.allAcademicYears.push([action.payload.academicYear]);
      }
    });
  },
});
