import React from "react";
import * as S from "./Pagination.styled";

interface IPaginationProps {
  nextPage: () => void;
  prevPage: () => void;
  totalPage: number;
  currentPage: number;
  changePage: (page: number) => void;
}

export default function Pagination({
  nextPage,
  prevPage,
  totalPage,
  currentPage,
  changePage,
}: IPaginationProps) {
  const pagesArray = Array.from({ length: totalPage }, (_, index) => index + 1);
  return (
    <S.PaginationContainer>
      <S.PrevBtn onClick={prevPage}>
        <i className="bi bi-chevron-left"></i>
      </S.PrevBtn>
      <S.PagesList>
        {pagesArray.map((pageNumber, index) => (
          <S.PageItem
            onClick={() => changePage(index)}
            $selected={currentPage === index}
            key={pageNumber}
          >
            {pageNumber}
          </S.PageItem>
        ))}
      </S.PagesList>
      <S.PrevBtn onClick={nextPage}>
        <i className="bi bi-chevron-right"></i>
      </S.PrevBtn>
    </S.PaginationContainer>
  );
}
