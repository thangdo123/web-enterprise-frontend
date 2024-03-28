import React from "react";
import * as S from "./LeftHeaderList.styled";
import HeaderItem from "../HeaderItem/HeaderItem";

const HEADER_LINKS = [
  { name: "Home", path: "/" },
  { name: "My Submissions", path: "/viewsubmission" },
  { name: "Contact", path: "/submissiondetail" },
];

export default function LeftHeaderList() {
  return (
    <S.LeftHeaderList>
      {HEADER_LINKS.map(({ name, path }, index) => (
        <HeaderItem key={index} title={name} to={path} />
      ))}
    </S.LeftHeaderList>
  );
}
