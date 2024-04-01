import React from "react";
import * as S from "./Layout.styled";
import Header from "../../Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";


const HEADER_LINKS = [
  { name: "Homepage", path: "/" },
];

export default function LayoutCoordinator() {
  return (
    <S.LayoutContainer>
      <Header headerLink={HEADER_LINKS}/>
      <Outlet />
      <Footer/>
    </S.LayoutContainer>
  );
}