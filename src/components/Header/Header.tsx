import React from "react";
import * as S from "./Header.styled";
import LeftHeaderList from "./LeftHeaderList/LeftHeaderList";
import RightHeaderList from "./RightHeaderList/RightHeaderList";
import Sidebar from "./SideBar/Sidebar";
import { ITopHeader } from "../../interfaces";

interface IHeaderProps{
  onSearch: (input: string) => void;
  headerLink:ITopHeader[];
}

export default function Header({headerLink, onSearch}:IHeaderProps) {
  return (
    <S.HeaderContainer>
      <LeftHeaderList headerLink={headerLink}/>
      <Sidebar headerLink={headerLink}/>
      <S.Logo>
        <S.Icon className="bi bi-book"></S.Icon>
      </S.Logo>
      <RightHeaderList onSearch={onSearch}/>
    </S.HeaderContainer>
  );
}
