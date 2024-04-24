import React from "react";
import { IRoute } from "../interfaces";
import EditProfile from "../pages/EditProfile/EditProfile";
import Statistic from "../pages/Manager/Statistic/statistic";
import ExceptionReports from "../pages/Manager/ExceptionReports/ExceptionReports";
import { Navigate } from "react-router";
import ChosenContributions from "../pages/Manager/ChosenContributions/chosenContributions";


export const layoutManagerRoutes: IRoute[] = [
  {
    path: "/",
    component: <Navigate to={"/chosencontributions"} />,
  },
  {
    path: "/chosencontributions",
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
