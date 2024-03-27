import { configureStore } from "@reduxjs/toolkit";
import itemState from "./slices/item";
import { loginState } from "./slices/login";
import { accountState } from "./slices/accounts";
import { facultyState } from "./slices/faculties";
import { academicYearState } from "./slices/academicYear";
import { adminProfileState } from "./slices/userProfile";
import { contributionState } from "./slices/contribution";

const store = configureStore({
  reducer: {
    [itemState.name]: itemState.reducer,
    [loginState.name]: loginState.reducer,
    [accountState.name]: accountState.reducer,
    [facultyState.name]: facultyState.reducer,
    [academicYearState.name]: academicYearState.reducer,
    [adminProfileState.name]: adminProfileState.reducer,
    [contributionState.name]: contributionState.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
