import React from "react";
import * as S from "./Sort.styled";

export default function Sort() {
  return (
    <S.SortContainer>
      <S.SortBtn>
        <S.TitleBtn>Sort</S.TitleBtn>
        <i className="bi bi-arrow-down-short"></i>
      </S.SortBtn>
    </S.SortContainer>
  );
}
