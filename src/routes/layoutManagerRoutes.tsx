import React from "react";
import { IRoute } from "../interfaces";
import EditProfile from "../pages/EditProfile/EditProfile";
import Statistic from "../pages/Manager/Statistic/Statistic";
import ChosenContributions from "../pages/Manager/ChosenContributions/ChosenContributions";

export const layoutManagerRoutes: IRoute[] = [
  {
    path: "/",
    component: <ChosenContributions />,
  },
  {
    path: "/statistic",
    component: <Statistic />,
  },
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
];
