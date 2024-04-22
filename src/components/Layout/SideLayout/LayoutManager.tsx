import React from "react";

import * as S from "./Layout.styled";
import { Outlet } from "react-router";
import Header from "../../SideHeader/Header";
const HEADER_LIST = [
  {
    title: "Chosen Contribution",
    path: "/chosencontributions",
    icon: <i className="bi bi-house-door-fill"></i>,
  },
  {
    title: "Statistic",
    path: "/statistic",
    icon: <i className="bi bi-bar-chart-fill"></i>,
  },
  {
    title: "User Profile",
    path: "/editprofile",
    icon: <i className="bi bi-person-circle"></i>,
  },
  {
    title: "Exception Reports",
    path: "/exceptionreports",
    icon: <i className="bi bi-file-earmark-post"></i>,
  },
];

export default function Layout() {
  return (
    <S.LayoutContainer>
      <Header headerList={HEADER_LIST} />
      <Outlet />
    </S.LayoutContainer>
  );
}
