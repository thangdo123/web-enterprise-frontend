import React from "react";
import { IRoute } from "../interfaces";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import CreateClosureDate from "../pages/Admin/Academic year/Create/CreateClosureDate";
import CreateSubmission from "../pages/Student/Submission/Create/CreateSubmission";
import ViewMySubmission from "../pages/Student/MySubmission/ViewMySubmission";

export const standaloneRoutes: IRoute[] = [
  {
    path: "*",
    component: <h1>Co cai lone</h1>,
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
    path: "/createclosuredate",
    component: <CreateClosureDate />,
  },
  {
    path: "/createsubmission",
    component: <CreateSubmission />,
  },
  {
    path: "/viewsubmission",
    component: <ViewMySubmission />,
  },
];
