import React, { useState } from "react";
import * as S from "./Toolbar.styled";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Searchbar from "../../../../components/Searchbar/Searchbar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { fetchAcademicYears } from "../../../../store/slices/Admin/academicYear";
import Popup from "../../../../components/PopUp/Popup";

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
      dispatch(fetchAcademicYears("asc"));
    } else if (type === "Descending") {
      dispatch(fetchAcademicYears("desc"));
    }
  };
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(!show);
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
        <S.SearchbarIcon>
          <i onClick={handleClose} className="bi bi-search"></i>
        </S.SearchbarIcon>
        <Popup show={show} onClose={handleClose}>
          <Searchbar onSearch={onSearch} />
        </Popup>
        <S.ToolSearchbar>
          <Searchbar onSearch={onSearch} />
        </S.ToolSearchbar>
        <S.AddBtn onClick={onCreate}>{btnTitle}</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
