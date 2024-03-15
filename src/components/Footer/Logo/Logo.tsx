import React from "react";
import * as S from "./Logo.styled";

export default function Logo() {
  return (
    <S.LogoContainer>
      <S.Logo>
        <i className="bi bi-book"></i>
      </S.Logo>
      <S.Content>
        Quality materials, good designs, professional craftsmanship and
        sustainability.
      </S.Content>
    </S.LogoContainer>
  );
}
