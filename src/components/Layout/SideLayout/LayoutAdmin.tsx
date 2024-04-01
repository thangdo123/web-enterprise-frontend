import React from "react";

import * as S from "./Layout.styled";
import { Outlet } from "react-router";
import Header from "../../SideHeader/Header";
const HEADER_LIST = [
  {
    title: "Overview",
    path: "/",
    icon: <i className="bi bi-house-door-fill"></i>,
  },
  {
    title: "User Profile",
    path: "/editprofile",
    icon: <i className="bi bi-person-circle"></i>,
  },
  {
    title: "Accounts List",
    path: "/accounts",
    icon: <i className="bi bi-person-badge-fill"></i>,
  },
  {
    title: "Faculties List",
    path: "/faculties",
    icon: <i className="bi bi-buildings-fill"></i>,
  },
  {
    title: "Closure Date",
    path: "/closuredate",
    icon: <i className="bi bi-alarm-fill"></i>,
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
