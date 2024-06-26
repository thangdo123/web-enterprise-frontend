import React from "react";
import * as S from "./Toolbar.styled";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { fetchAcademicYears } from "../../../../store/slices/Admin/academicYear";

interface IOption {
  value: string;
}

interface IToolbarProps {
  onCreate: () => void;
  pageTitle: string;
  sortTitle: string;
  btnTitle: string;
  optionList: IOption[];
}

export default function Toolbar({
  onCreate,
  pageTitle,
  sortTitle,
  btnTitle,
  optionList,
}: IToolbarProps) {
  const dispatch = useDispatch<AppDispatch>();
  const sortType = (type: string) => {
    if (type === "Ascending") {
      dispatch(fetchAcademicYears("asc"));
    } else if (type === "Descending") {
      dispatch(fetchAcademicYears("desc"));
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
        <S.AddBtn onClick={onCreate}>{btnTitle}</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
