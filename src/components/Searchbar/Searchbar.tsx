import React from "react";
import * as S from "./Searchbar.styled";

export default function Searchbar() {
  return (
    <S.SearchContainer>
      <S.Input type="text" />
      <S.Icon>
        <i className="bi bi-search"></i>
      </S.Icon>
    </S.SearchContainer>
  );
}
