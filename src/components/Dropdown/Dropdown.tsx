import React, { useState } from "react";
import * as S from "./Dropdown.styled";

interface IOption {
  value?: string;
  id?: string;
  name?: string;
}

interface IDropdownProps {
  title: string;
  optionList: IOption[];
  onClick: (option: IOption) => void;
}

export default function Dropdown({
  title,
  optionList,
  onClick,
}: IDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [defaultTitle, setDefaultTitle] = useState(title);
  const handleSortOpen = () => setIsOpen(!isOpen);

  const handleSelectedOption = (option: IOption) => {
    setDefaultTitle(option.name! || option.value!);
    onClick(option);
    handleSortOpen();
  };

  return (
    <S.SortContainer>
      <S.SortBtn onClick={handleSortOpen}>
        <S.TitleBtn>{defaultTitle}</S.TitleBtn>
        <i className="bi bi-arrow-down-short"></i>
      </S.SortBtn>
      <S.SortOptionContainer $isOpen={isOpen}>
        {optionList &&
          optionList.map((item, index) => (
            <S.SortOption
              key={index}
              onClick={() => handleSelectedOption(item)}
            >
              {item.value || item.name}
            </S.SortOption>
          ))}
      </S.SortOptionContainer>
    </S.SortContainer>
  );
}
