import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../../config/api";
import { IFacultyState } from "../../../interfaces/faculty.interfaces";
import { setCookie } from "../../../utils/cookies.utils";

export const fetchAllFaculties = createAsyncThunk(
  "faculties/fetchAllFaculties",
  async (sort: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ADMIN.FACULTIES + `/?sort=${sort}`,
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const searchFaculty = createAsyncThunk(
  "faculties/fetchAllFaculties",
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.ADMIN.FACULTIES + `/?name=${name}`,
      );
      console.log(response.data);
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
        API_BASE_URL + API_ENDPOINTS.ADMIN.DELETE_FACULTIES + facultyId,
      );
      console.log(response.data);
      return facultyId;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  },
);

export const updateFacultyById = createAsyncThunk(
  "faculties/updateFacultyById",
  async (
    { facultyId, name }: { facultyId: string; name: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axiosInstance.put(
        API_BASE_URL + API_ENDPOINTS.ADMIN.UPDATE_FACULTIES + facultyId,
        { name },
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
        API_BASE_URL + API_ENDPOINTS.ADMIN.CREATE_FACULTIES,
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
      if (action.payload.accessToken) {
        setCookie("token", action.payload.accessToken);
        location.reload();
      }
    });
    builder.addCase(fetchAllFaculties.rejected, (state) => {
      state.allFaculties = [];
    });
    builder.addCase(deleteFacultyById.fulfilled, (state, action) => {
      state.allFaculties = state.allFaculties.map((faculties) =>
        faculties.filter((faculty) => faculty.id !== action.payload),
      );
    });
    builder.addCase(updateFacultyById.fulfilled, (state, action) => {
      state.allFaculties = state.allFaculties.map((faculties) =>
        faculties.map((faculty) =>
          faculty.id === action.payload
            ? { ...faculty, name: action.meta.arg.name }
            : faculty,
        ),
      );
    });
    builder.addCase(createFaculty.fulfilled, (state, action) => {
      const { allFaculties } = state;
      const facultiesWithLessThan10 = allFaculties.find(
        (arr) => arr.length < 10,
      );

      if (facultiesWithLessThan10) {
        facultiesWithLessThan10.push(action.payload.faculty);
      } else {
        state.allFaculties.push([action.payload.faculty]);
      }
    });
  },
});
