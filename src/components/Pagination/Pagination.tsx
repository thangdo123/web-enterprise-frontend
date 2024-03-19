import React from "react";
import * as S from "./Pagination.styled";

interface IPaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  totalPage: number;
}

export default function Pagination({
  nextPage,
  prevPage,
  totalPage,
}: IPaginationProps) {
  const pagesArray = Array.from({ length: totalPage }, (_, index) => index + 1);
  return (
    <S.PaginationContainer>
      <S.PrevBtn onClick={prevPage}>
        <i className="bi bi-chevron-left"></i>
      </S.PrevBtn>
      <S.PagesList>
        {pagesArray.map((pageNumber) => (
          <S.PageItem key={pageNumber}>{pageNumber}</S.PageItem>
        ))}
      </S.PagesList>
      <S.PrevBtn onClick={nextPage}>
        <i className="bi bi-chevron-right"></i>
      </S.PrevBtn>
    </S.PaginationContainer>
  );
}
