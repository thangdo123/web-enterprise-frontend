import React from "react";
import { IRoute } from "../interfaces";
import Homepage from "../pages/Coordinator/Homepage";
import EditProfile from "../pages/EditProfile/EditProfile";
import ContributionDetail from "../pages/Coordinator/Contribution detail/ContributionDetail";
import Chat from "../pages/Chat/Chat";

export const layoutCoordinatorRoutes: IRoute[] = [
  {
    path: "/",
    component: <Homepage />,
  },
  {
    path: "/:id",
    component: <ContributionDetail />,
  },
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
  {
    path: "/contact",
    component: <Chat />,
  },
];
