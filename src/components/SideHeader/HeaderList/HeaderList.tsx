import React from "react";
import * as S from "./HeaderList.styled";
import HeaderItem from "../HeaderItem/HeaderItem";
import { ISideHeader } from "../../../interfaces";
import { useLocation } from "react-router";

interface IHeaderListProps {
  OpenState: boolean;
  headerList: ISideHeader[];
}

export default function HeaderList({
  OpenState,
  headerList,
}: IHeaderListProps) {
  const location = useLocation();
  const selectedHeader = location.pathname;
  return (
    <S.ListContainer>
      {headerList.map(({ title, path, icon }, index) => (
        <S.HeaderItemWrapper key={index}>
          <HeaderItem
            title={title}
            path={path}
            icon={icon}
            openState={OpenState}
            isSelected={selectedHeader === path}
          />
        </S.HeaderItemWrapper>
      ))}
    </S.ListContainer>
  );
}
