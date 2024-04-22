import React from "react";
import { IRoute } from "../interfaces";
import GuestHomepage from "../pages/Guest/GuestHomepage";
import ContributionDetail from "../pages/Guest/PublishedContributionDetail/ContributionDetail";
import EditProfile from "../pages/EditProfile/EditProfile";

export const layoutGuestRoutes: IRoute[] = [
  {
    path: "/",
    component: <GuestHomepage />,
  },
  {
    path: "/:id",
    component: <ContributionDetail />,
  },
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
];
