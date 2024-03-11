import React from "react";
import * as S from "./RightHeaderList.styled";

export default function RightHeaderList() {
  return (
    <S.RightHeaderList>
      <S.RightListItem>
        <i className="bi bi-search"></i>
      </S.RightListItem>
      <S.RightListItem>
        <i className="bi bi-bell"></i>
      </S.RightListItem>
      <S.RightListItem>User: Thang Do</S.RightListItem>
    </S.RightHeaderList>
  );
}
