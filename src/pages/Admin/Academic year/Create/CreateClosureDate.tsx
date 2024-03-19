import React from "react";
import * as S from "./CreateClosureDate.styled";

const CreateClosureDate = () => {
  return (
    <S.Layout>
      <S.Container>
        <S.SetDateBlock>
          <S.LeftTitle>Closure Date:</S.LeftTitle>
          <S.RightCalendar>
            <input type="datetime-local" name="" />
          </S.RightCalendar>
        </S.SetDateBlock>
        <S.SetDateBlock>
          <S.LeftTitle>Final Closure Date:</S.LeftTitle>
          <S.RightCalendar>
            <input type="datetime-local" name="" />
          </S.RightCalendar>
        </S.SetDateBlock>
      </S.Container>
    </S.Layout>
  );
};

export default CreateClosureDate;
