import React from "react";
import { IRoute } from "../interfaces";
import Statistic from "../pages/Manager/Statistic/statistic";
import EditProfile from "../pages/EditProfile/EditProfile";
import ChosenContributions from "../pages/Manager/ChosenContributions/chosenContributions";

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
