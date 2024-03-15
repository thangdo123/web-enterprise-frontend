import React from "react";
import * as S from "./Footer.styled";
import FooterContent from "./FooterContent/FooterContent";
import Divider from "../Divider/Divider";
import Copyright from "./Copyright/Copyright";

export default function Footer() {
  return (
    <S.FooterContainer>
      <FooterContent />
      <Divider />
      <Copyright />
    </S.FooterContainer>
  );
}
