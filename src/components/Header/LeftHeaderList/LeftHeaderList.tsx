import React from "react";
import * as S from "./LeftHeaderList.styled";
import HeaderItem from "../HeaderItem/HeaderItem";

const HEADER_LINKS = [
  { name: "Home", path: "/" },
  { name: "My Submissions", path: "/mysubmissions" },
  { name: "Contact", path: "/contact" },
];

export default function LeftHeaderList() {
  return (
    <S.LeftHeaderList>
      {HEADER_LINKS.map(({ name, path }: { name: string; path: string }) => (
        <HeaderItem key={path} title={name} to={path} />
      ))}
    </S.LeftHeaderList>
  );
}
