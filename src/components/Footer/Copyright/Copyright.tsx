import React from "react";
import * as S from "./Copyright.styled";

export default function Copyright() {
  return (
    <S.CopyrightContainer>
      <S.CopyrightText>© 2023 Thang Do. All Rights Reserved.</S.CopyrightText>
      <S.SocialMedia>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter-x"></i>
      </S.SocialMedia>
    </S.CopyrightContainer>
  );
}
