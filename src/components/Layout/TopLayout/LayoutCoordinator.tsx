import React from "react";
import * as S from "./Layout.styled";
import Header from "../../Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import { useDispatch } from "react-redux";
import { searchContributions } from "../../../store/slices/Coordinator/coodinatorContribution";
import { AppDispatch } from "../../../store";

const HEADER_LINKS = [
  { name: "Homepage", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function LayoutCoordinator() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <S.LayoutContainer>
      <Header headerLink={HEADER_LINKS} onSearch={(input: string) => dispatch(searchContributions(input))}/>
      <Outlet />
      <Footer />
    </S.LayoutContainer>
  );
}
