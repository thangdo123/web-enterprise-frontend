import React from "react";
import { IRoute } from "../interfaces";
import Homepage from "../pages/Coordinator/Homepage";
import EditProfile from "../pages/EditProfile/EditProfile";

export const layoutCoordinatorRoutes: IRoute[] = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
];
