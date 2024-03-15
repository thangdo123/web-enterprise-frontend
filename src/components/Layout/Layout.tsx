import React from "react";
import Header from "../Admin/Header/Header";
import * as S from "./Layout.styled";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  );
}
