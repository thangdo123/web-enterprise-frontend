import React from "react";
import { IRoute } from "../interfaces";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Loader from "../components/Loader/Loader";
import HomePage from "../pages/Homepage/Homepage";

export const standaloneRoutes: IRoute[] = [
  {
    path: "*",
    component: <Loader/>,
  },
  {
    path: "/",
    component: <HomePage />,
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
