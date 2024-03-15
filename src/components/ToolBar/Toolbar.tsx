import React from "react";
import * as S from "./Toolbar.styled";
import Sort from "../Sort/Sort";
import Searchbar from "../Searchbar/Searchbar";

export default function Toolbar() {
  return (
    <S.ToolBarContainer>
      <S.Title>Accounts List</S.Title>
      <S.ToolBar>
        <Sort />
        <Searchbar />
        <S.AddBtn>Add</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
