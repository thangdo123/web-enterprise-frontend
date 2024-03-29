import React from "react";
import { IRoute } from "../interfaces";
import ViewMySubmission from "../pages/Student/MySubmission/ViewMySubmission";
import SubmissionDetail from "../pages/Student/MySubmission/Detail/SubmissionDetail";
import CreateSubmission from "../pages/Student/MySubmission/Create/CreateSubmission";
import { Navigate } from "react-router";
import EditProfile from "../pages/EditProfile/EditProfile";


export const layoutStudentRoutes: IRoute[] = [
  {
    path: "/",
    component: <Navigate to={"/viewsubmission"}/>,
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
  {
    path: "/editprofile",
    component: <EditProfile/>,
  },
];
