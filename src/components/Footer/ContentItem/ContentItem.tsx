import React from "react";
import * as S from "./ContentItem.styled";

interface IContentItemProps {
  faculty: string;
  address: string;
  phone: string;
  mail: string;
}

export default function ContentItem({
  faculty,
  address,
  phone,
  mail,
}: IContentItemProps) {
  return (
    <S.FooterItem>
      <S.ItemTitle>{faculty}</S.ItemTitle>
      <S.ItemContents>
        <S.Content>{address}</S.Content>
        <S.Content>{phone}</S.Content>
        <S.Content>{mail}</S.Content>
      </S.ItemContents>
    </S.FooterItem>
  );
}
