import React from "react";
import { IRoute } from "../interfaces";
import HomePage from "../pages/Student/Homepage/Homepage";
import CreateSubmission from "../pages/Student/Submission/Create/CreateSubmission";
import ViewMySubmission from "../pages/Student/MySubmission/ViewMySubmission";


export const layoutStudentRoutes: IRoute[] = [
  {
    path: "/",
    component: <HomePage />,
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
