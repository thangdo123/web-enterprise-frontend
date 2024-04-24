import React from "react";
import * as S from "./Layout.styled";
import Header from "../../Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { searchContributions } from "../../../store/slices/Student/contribution";

const HEADER_LINKS = [
  { name: "My Submissions", path: "/viewsubmission" },
  { name: "Contact", path: "/contact" },
];

export default function LayoutStudent() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <S.LayoutContainer>
      <Header headerLink={HEADER_LINKS} onSearch={(input: string) => dispatch(searchContributions(input))}/>
      <Outlet />
      <Footer />
    </S.LayoutContainer>
  );
}
