import React from "react";
import * as S from "./HeaderItem.styled";

interface IHeaderItemProps {
  title: string;
  path: string;
  icon: JSX.Element;
  openState: boolean;
  isSelected: boolean;
}

export default function HeaderItem({
  title,
  path,
  icon,
  openState,
  isSelected,
}: IHeaderItemProps) {
  return (
    <S.HeaderItem $isSelected={isSelected} to={path}>
      <S.Icon>{icon}</S.Icon>
      <S.Title $openState={openState}>{title}</S.Title>
    </S.HeaderItem>
  );
}
