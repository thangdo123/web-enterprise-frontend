import React from "react";
import { IRoute } from "../interfaces";
import HomePage from "../pages/Student/Homepage/Homepage";
import ViewMySubmission from "../pages/Student/MySubmission/ViewMySubmission";
import SubmissionDetail from "../pages/Student/MySubmission/Detail/SubmissionDetail";
import CreateSubmission from "../pages/Student/MySubmission/Create/CreateSubmission";


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
  {
    path: "/viewsubmission/:id",
    component: <SubmissionDetail/>,
  },
];
