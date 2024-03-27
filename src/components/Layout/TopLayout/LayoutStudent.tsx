import React from "react";
import * as S from "./Layout.styled";
import Header from "../../Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";

export default function LayoutStudent() {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
      <Footer/>
    </S.LayoutContainer>
  );
}
