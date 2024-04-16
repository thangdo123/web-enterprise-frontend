import React from "react";
import { IRoute } from "../interfaces";
import EditProfile from "../pages/EditProfile/EditProfile";
import ChosenContributions from "../pages/Manager/ChosenContributions/chosenContributions";
import Statistic from "../pages/Manager/Statistic/statistic";
import ExceptionReports from "../pages/Manager/ExceptionReports/ExceptionReports";

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
  {
    path: "/exceptionreports",
    component: <ExceptionReports />,
  },
];
