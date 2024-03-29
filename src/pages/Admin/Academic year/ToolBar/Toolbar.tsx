import React from "react";
import * as S from "./Toolbar.styled";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Searchbar from "../../../../components/Searchbar/Searchbar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { sortAcademicYears } from "../../../../store/slices/academicYear";

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
    if (type === "Ascending") {
      dispatch(sortAcademicYears("asc"));
    } else if (type === "Descending") {
      dispatch(sortAcademicYears("desc"));
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
        <S.AddBtn onClick={onCreate}>{btnTitle}</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
