import React from "react";
import * as S from "./LeftHeaderList.styled";
import HeaderItem from "../HeaderItem/HeaderItem";
import { ITopHeader } from "../../../interfaces";



export default function LeftHeaderList({headerLink}:{headerLink:ITopHeader[]}) {
  return (
    <S.LeftHeaderList>
      {headerLink.map(({ name, path }, index) => (
        <HeaderItem key={index} title={name} to={path} />
      ))}
    </S.LeftHeaderList>
  );
}
