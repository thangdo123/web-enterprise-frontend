import React from "react";
import { IRoute } from "../interfaces";
import Accounts from "../pages/Admin/Accounts/Accounts";
import EditProfile from "../pages/EditProfile/EditProfile";
import Faculty from "../pages/Admin/Faculty/Faculty";
import AcademicYear from "../pages/Admin/Academic year/AcademicYear";

export const layoutRoutes: IRoute[] = [
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
