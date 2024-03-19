import React from "react";
import * as S from "./Card.styled";

interface ICardProps {
  imgUrl: string,
  cardTitle: string,
}

const Card = ({imgUrl, cardTitle} : ICardProps) => {
  return (
    <S.CardItems>
      <S.CardImage>
        <img src={imgUrl} alt="" />
      </S.CardImage>
      <S.CardTitle>{cardTitle}</S.CardTitle>
    </S.CardItems>
  );
};

export default Card;
