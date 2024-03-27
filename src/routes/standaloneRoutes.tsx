import React from "react";
import { IRoute } from "../interfaces";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import CreateSubmission from "../pages/Student/Submission/Create/CreateSubmission";
import ViewMySubmission from "../pages/Student/MySubmission/ViewMySubmission";
import HomePage from "../pages/Student/Homepage/Homepage";

export const standaloneRoutes: IRoute[] = [
  {
    path: "*",
    component: <h1>Loading..</h1>,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/resetpassword",
    component: <ResetPassword />,
  },
  {
    path: "/createsubmission",
    component: <CreateSubmission />,
  },
  {
    path: "/viewsubmission",
    component: <ViewMySubmission />,
  },
  {
    path: "/homepage",
    component: <HomePage />,
  },
];
