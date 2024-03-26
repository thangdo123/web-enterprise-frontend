import React from "react";
import * as S from "./Toolbar.styled";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Searchbar from "../../../../components/Searchbar/Searchbar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { sortAccounts } from "../../../../store/slices/accounts";

interface IOption {
  value: string;
}

interface IToolbarProps {
  onCreate: () => void;
  onSearch: (input: string) => void;
  pageTitle: string;
  sortTitle: string;
  btnTitle: string;
  optionList: IOption[];
}

export default function Toolbar({
  onCreate,
  onSearch,
  pageTitle,
  sortTitle,
  btnTitle,
  optionList,
}: IToolbarProps) {
  const dispatch = useDispatch<AppDispatch>();
  const sortType = (type: string) => {
    if (type === "Student") {
      dispatch(sortAccounts("STUDENT"));
    } else if (type === "Marketing Manager") {
      dispatch(sortAccounts("MANAGER"));
    } else if (type === "Marketing Coordinator") {
      dispatch(sortAccounts("COORDINATOR"));
    }
  };
  return (
    <S.ToolBarContainer>
      <S.Title>{pageTitle}</S.Title>
      <S.ToolBar>
        <Dropdown
          onClick={sortType}
          title={sortTitle}
          optionList={optionList}
        />
        <Searchbar onSearch={onSearch} />
        <S.AddBtn onClick={onCreate}>{btnTitle}</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}