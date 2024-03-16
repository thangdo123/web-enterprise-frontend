import React, { useState } from "react";
import * as S from "./Dropdown.styled";

interface IOption {
  value: string;
}

interface IDropdownProps {
  title: string;
  optionList: IOption[];
}

export default function Dropdown({ title, optionList }: IDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSortOpen = () => setIsOpen(!isOpen);
  return (
    <S.SortContainer>
      <S.SortBtn onClick={handleSortOpen}>
        <S.TitleBtn>{title}</S.TitleBtn>
        <i className="bi bi-arrow-down-short"></i>
      </S.SortBtn>
      <S.SortOptionContainer isOpen={isOpen}>
        {optionList.map((item, index) => (
          <S.SortOption key={index}>{item.value}</S.SortOption>
        ))}
      </S.SortOptionContainer>
    </S.SortContainer>
  );
}
