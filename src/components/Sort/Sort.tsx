import React, { useState } from "react";
import * as S from "./Sort.styled";

export default function Sort() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSortOpen = () => setIsOpen(!isOpen);
  return (
    <S.SortContainer>
      <S.SortBtn onClick={handleSortOpen}>
        <S.TitleBtn>Sort</S.TitleBtn>
        <i className="bi bi-arrow-down-short"></i>
      </S.SortBtn>
      <S.SortOptionContainer isOpen={isOpen}>
        <S.SortOption>By name</S.SortOption>
        <S.SortOption>By name</S.SortOption>
        <S.SortOption>By date</S.SortOption>
      </S.SortOptionContainer>
    </S.SortContainer>
  );
}
