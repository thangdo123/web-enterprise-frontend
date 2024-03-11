import React from "react";
import * as S from "./Header.styled";
import LeftHeaderList from "./LeftHeaderList/LeftHeaderList";
import RightHeaderList from "./RightHeaderList/RightHeaderList";

export default function Header() {
  return (
    <S.HeaderContainer>
      <LeftHeaderList />
      <S.Logo>
        <i className="bi bi-book"></i>
      </S.Logo>
      <RightHeaderList />
    </S.HeaderContainer>
  );
}
