import React from "react";
import { IRoute } from "../interfaces";
import SelectContributions from "../pages/Manager/SelectContributions/selectContributions";
import Statistic from "../pages/Manager/Statistic/statistic";

export const layoutManagerRoutes: IRoute[] = [
  {
    path: "/",
    component: <SelectContributions />,
  },
  {
    path: "/statistic",
    component: <Statistic />,
  },
];
