import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IFacultyState } from "../../interfaces/faculty.interfaces";

export const fetchAllFaculties = createAsyncThunk(
  "accounts/fetchAllFaculties",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.FACULTIES,
      );
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const deleteFacultyById = createAsyncThunk(
  "faculties/deleteFacultyById",
  async (facultyId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        API_BASE_URL + API_ENDPOINTS.DELETE_FACULTIES + { facultyId },
      );
      console.log(response.data);
      return facultyId;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const createFaculty = createAsyncThunk(
  "faculties/createFaculty",
  async ({ name }: { name: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        API_BASE_URL + API_ENDPOINTS.CREATE_FACULTIES,
        { name },
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const initialState: IFacultyState = {
  allFaculties: [],
};

export const facultyState = createSlice({
  name: "facultyState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFaculties.pending, (state) => {
      state.allFaculties = [];
    });
    builder.addCase(fetchAllFaculties.fulfilled, (state, action) => {
      state.allFaculties = action.payload.allFaculties;
    });
    builder.addCase(fetchAllFaculties.rejected, (state) => {
      state.allFaculties = [];
    });
    // builder.addCase(deleteFacultyById.fulfilled, (state, action) => {
    //   state.allFaculties = state.allFaculties.filter(
    //     (faculty) => faculty !== action.payload,
    //   );
    // });

    builder.addCase(createFaculty.fulfilled, (state, action) => {
      const { allFaculties } = state;

      // Find an inner array that has less than 10 faculties
      const facultiesWithLessThan10 = allFaculties.find(
        (arr) => arr.length < 10,
      );

      if (facultiesWithLessThan10) {
        // Push the new faculty into the existing inner array
        facultiesWithLessThan10.push(action.payload.faculty);
      } else {
        // Create a new inner array and push the new faculty into it
        state.allFaculties.push([action.payload.faculty]);
      }
    });
  },
});
