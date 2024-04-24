import React from "react";
import * as S from "./Layout.styled";
import Header from "../../Header/Header";
import { Outlet } from "react-router";
import Footer from "../../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { searchContributions } from "../../../store/slices/Guest/guest";

const HEADER_LINKS = [
  { name: "Homepage", path: "/" },
];

export default function LayoutGuest() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useSelector (
    (state: RootState) => state.guestState,
  );

  return (
    <S.LayoutContainer>
      <Header headerLink={HEADER_LINKS} onSearch={(keyword: string) => dispatch(searchContributions({id, keyword}))}/>
      <Outlet />
      <Footer />
    </S.LayoutContainer>
  );
}
