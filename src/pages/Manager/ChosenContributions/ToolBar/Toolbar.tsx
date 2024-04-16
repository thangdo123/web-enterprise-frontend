import React, { useState } from "react";
import * as S from "./Toolbar.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Searchbar from "../../../../components/Searchbar/Searchbar";
import { getAllChosenContributions } from "../../../../store/slices/Manager/chosenContributions";
import Popup from "../../../../components/PopUp/Popup";

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
      dispatch(getAllChosenContributions("asc"));
    } else if (type === "Descending") {
      dispatch(getAllChosenContributions("desc"));
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
        <S.AddBtn onClick={downloadContributions}>{btnTitle}</S.AddBtn>
      </S.ToolBar>
    </S.ToolBarContainer>
  );
}
