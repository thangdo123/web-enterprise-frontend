import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";
import { API_BASE_URL, API_ENDPOINTS } from "../../config/api";
import { IContactState } from "../../interfaces/chat.interfaces";

export const viewCoordinatorByFacultyId = createAsyncThunk(
  "user/viewCoordinatorByFacultyId",
  async (facultyId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL +
          API_ENDPOINTS.USER.VIEW_COORDINATOR_BY_FACULTY +
          facultyId,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const viewStudentByFacultyId = createAsyncThunk(
  "coordinator/viewStudentByFacultyId",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        API_BASE_URL + API_ENDPOINTS.COORDINATOR.VIEW_STUDENT_BY_FACULTY,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const initialState: IContactState = {
  coordinator: [],
};

export const contactState = createSlice({
  name: "contactState",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(viewCoordinatorByFacultyId.fulfilled, (state, action) => {
      state.coordinator = action.payload.coordinator;
    });
    builder.addCase(viewStudentByFacultyId.fulfilled, (state, action) => {
      state.coordinator = action.payload.students;
    });
  },
});
