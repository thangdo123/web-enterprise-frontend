import React from "react";
import * as S from "./Toolbar.styled";
import Sort from "../Sort/Sort";
import Searchbar from "../Searchbar/Searchbar";

interface IToolbarProps {
  onClick: () => void;
}
export default function Toolbar({ onClick }: IToolbarProps) {
  return (
    <S.ToolBarContainer>
      <S.Title>Accounts List</S.Title>
      <S.ToolBar>
        <Sort />
        <Searchbar />
        <S.AddBtn onClick={onClick}>Add</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
