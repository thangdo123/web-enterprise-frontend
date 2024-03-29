import React from "react";
import * as S from "./Header.styled";
import LeftHeaderList from "./LeftHeaderList/LeftHeaderList";
import RightHeaderList from "./RightHeaderList/RightHeaderList";
import Sidebar from "./SideBar/Sidebar";
import { ITopHeader } from "../../interfaces";

export default function Header({headerLink}:{headerLink:ITopHeader[]}) {
  return (
    <S.HeaderContainer>
      <LeftHeaderList headerLink={headerLink}/>
      <Sidebar />
      <S.Logo>
        <S.Icon className="bi bi-book"></S.Icon>
      </S.Logo>
      <RightHeaderList />
    </S.HeaderContainer>
  );
}
