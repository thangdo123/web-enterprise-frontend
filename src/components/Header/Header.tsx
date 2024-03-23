import React from "react";
import * as S from "./Header.styled";
import LeftHeaderList from "./LeftHeaderList/LeftHeaderList";
import RightHeaderList from "./RightHeaderList/RightHeaderList";
import Sidebar from "./SideBar/Sidebar";

export default function Header() {
  return (
    <S.HeaderContainer>
      <LeftHeaderList />
      <Sidebar />
      <S.Logo>
        <S.Icon className="bi bi-book"></S.Icon>
      </S.Logo>
      <RightHeaderList />
    </S.HeaderContainer>
  );
}
