import React from "react";
import { IRoute } from "../interfaces";
import Accounts from "../pages/Admin/Accounts/Accounts";

export const layoutRoutes: IRoute[] = [
  {
    path: "/accounts",
    component: <Accounts />,
  },
];
