import React from "react";
import * as S from "./Layout.styled";
import Header from "../../Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";

const HEADER_LINKS = [
  { name: "My Submissions", path: "/viewsubmission" },
  { name: "Contact", path: "/contact" },
];

export default function LayoutStudent() {
  return (
    <S.LayoutContainer>
      <Header headerLink={HEADER_LINKS} />
      <Outlet />
      <Footer />
    </S.LayoutContainer>
  );
}
