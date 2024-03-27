import React from "react";
import Header from "../Admin/Header/Header";
import * as S from "./Layout.styled";
import { Outlet } from "react-router";
const HEADER_LIST = [
  {
    title: "Overview",
    path: "/",
    icon: <i className="bi bi-house-door-fill"></i>,
  },
  {
    title: "Statistic",
    path: "/statistic",
    icon: <i className="bi bi-bar-chart-fill"></i>,
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
