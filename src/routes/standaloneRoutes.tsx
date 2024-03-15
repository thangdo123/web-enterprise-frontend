import React from "react";
import { IRoute } from "../interfaces";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

export const standaloneRoutes: IRoute[] = [
  {
    path: "*",
    component: <h1>ERRorrr</h1>,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/resetpassword",
    component: <ResetPassword />,
  },
];
