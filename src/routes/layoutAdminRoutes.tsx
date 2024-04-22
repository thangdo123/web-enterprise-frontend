import React from "react";
import { IRoute } from "../interfaces";
import Accounts from "../pages/Admin/Accounts/Accounts";
import EditProfile from "../pages/EditProfile/EditProfile";
import Faculty from "../pages/Admin/Faculty/Faculty";
import AcademicYear from "../pages/Admin/Academic year/AcademicYear";
import { Navigate } from "react-router";

export const layoutAdminRoutes: IRoute[] = [
  {
    path: "/",
    component: <Navigate to={"/accounts"} />,
  },
  {
    path: "/accounts",
    component: <Accounts />,
  },
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
  {
    path: "/faculties",
    component: <Faculty />,
  },
  {
    path: "/closuredate",
    component: <AcademicYear />,
  },
];
