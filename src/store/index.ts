import { configureStore } from "@reduxjs/toolkit";
import { loginState } from "./slices/login";
import { accountState } from "./slices/Admin/accounts";
import { facultyState } from "./slices/Admin/faculties";
import { academicYearState } from "./slices/Admin/academicYear";
import { adminProfileState } from "./slices/userProfile";
import { contributionState } from "./slices/Student/contribution";
import { resetPasswordState } from "./slices/resetPassword";
import { coordinatorContributionState } from "./slices/Coordinator/coodinatorContribution";
import { chosenContributionState } from "./slices/Manager/chosenContributions";
import { statisticState } from "./slices/Manager/statistic";
import notificationState from "./slices/notification";
import { contactState } from "./slices/viewCoordinator";
import { exceptionReportsState } from "./slices/Manager/exceptionReports";
import { guestState } from "./slices/Guest/guest";

const store = configureStore({
  reducer: {
    [notificationState.name]: notificationState.reducer,
    [loginState.name]: loginState.reducer,
    [accountState.name]: accountState.reducer,
    [facultyState.name]: facultyState.reducer,
    [academicYearState.name]: academicYearState.reducer,
    [adminProfileState.name]: adminProfileState.reducer,
    [contributionState.name]: contributionState.reducer,
    [resetPasswordState.name]: resetPasswordState.reducer,
    [coordinatorContributionState.name]: coordinatorContributionState.reducer,
    [chosenContributionState.name]: chosenContributionState.reducer,
    [statisticState.name]: statisticState.reducer,
    [contactState.name]: contactState.reducer,
    [exceptionReportsState.name]: exceptionReportsState.reducer,
    [guestState.name]: guestState.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
