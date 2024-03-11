import React from "react";
import * as S from "./HeaderItem.styled";

interface IHeaderItemProps {
  to: string;
  title: string;
}

export default function HeaderItem({ to, title }: IHeaderItemProps) {
  return <S.NavLink to={to}>{title}</S.NavLink>;
}
