import React, { useState } from "react";
import * as S from "./HeaderList.styled";
import HeaderItem from "../HeaderItem/HeaderItem";
import { ISideHeader } from "../../../interfaces";

interface IHeaderListProps {
  OpenState: boolean;
  headerList: ISideHeader[];
}

export default function HeaderList({
  OpenState,
  headerList,
}: IHeaderListProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const handleSelectedIndex = (index: number) => setSelectedIndex(index);
  return (
    <S.ListContainer>
      {headerList.map(({ title, path, icon }, index) => (
        <S.HeaderItemWrapper
          key={index}
          onClick={() => handleSelectedIndex(index)}
        >
          <HeaderItem
            title={title}
            path={path}
            icon={icon}
            openState={OpenState}
            isSelected={selectedIndex === index}
          />
        </S.HeaderItemWrapper>
      ))}
    </S.ListContainer>
  );
}
