import React from "react";
import * as S from "./HeaderItem.styled";

interface IHeaderItemProps {
  title: string;
  path: string;
  icon: JSX.Element;
  openState: boolean;
}

export default function HeaderItem({
  title,
  path,
  icon,
  openState,
}: IHeaderItemProps) {
  return (
    <S.HeaderItem to={path}>
      <S.Icon>{icon}</S.Icon>
      <S.Title
        style={openState === true ? { display: "block" } : { display: "none" }}
      >
        {title}
      </S.Title>
    </S.HeaderItem>
  );
}
