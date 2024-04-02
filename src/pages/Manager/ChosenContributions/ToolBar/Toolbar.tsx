import React from "react";
import * as S from "./Toolbar.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Searchbar from "../../../../components/Searchbar/Searchbar";
import { getAllChoosenContributions } from "../../../../store/slices/Manager/chosenContributions";

interface IOption {
  value: string;
}

interface IToolbarProps {
  onSearch: (input: string) => void;
  pageTitle: string;
  sortTitle: string;
  btnTitle: string;
  downloadContributions: () => void;
  optionList: IOption[];
}

export default function Toolbar({
  onSearch,
  downloadContributions,
  pageTitle,
  sortTitle,
  btnTitle,
  optionList,
}: IToolbarProps) {
  const dispatch = useDispatch<AppDispatch>();
  const sortType = (type: string) => {
    if (type === "Ascending") {
      dispatch(getAllChoosenContributions("asc"));
    } else if (type === "Descending") {
      dispatch(getAllChoosenContributions("desc"));
    }
  };
  return (
    <S.ToolBarContainer>
      <S.Title>{pageTitle}</S.Title>
      <S.ToolBar>
        <Dropdown
          onClick={(option) => sortType(option.value!)}
          title={sortTitle}
          optionList={optionList}
        />
        <Searchbar onSearch={onSearch} />
        <S.AddBtn onClick={downloadContributions}>{btnTitle}</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
