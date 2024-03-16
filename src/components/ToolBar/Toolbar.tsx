import React from "react";
import * as S from "./Toolbar.styled";
import Dropdown from "../Dropdown/Dropdown";
import Searchbar from "../Searchbar/Searchbar";

interface IOption {
  value: string;
}

interface IToolbarProps {
  onClick: () => void;
  pageTitle: string;
  sortTitle: string;
  btnTitle: string;
  optionList: IOption[];
}

export default function Toolbar({
  onClick,
  pageTitle,
  sortTitle,
  btnTitle,
  optionList,
}: IToolbarProps) {
  return (
    <S.ToolBarContainer>
      <S.Title>{pageTitle}</S.Title>
      <S.ToolBar>
        <Dropdown title={sortTitle} optionList={optionList} />
        <Searchbar />
        <S.AddBtn onClick={onClick}>{btnTitle}</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
