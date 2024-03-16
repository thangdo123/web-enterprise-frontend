import React from "react";
import * as S from "./CreateFaculty.styled";

const CreateFaculty = () => {
  return (
    <S.CreateFacultyLayout>
      <S.CreateFacultyContainer>
        <S.CreateFacultyBlock1>
          <S.CreateFacultyLeftTitle>Name:</S.CreateFacultyLeftTitle>
          <S.CreateFacultyBlock1Right>
            <input placeholder="Enter Username" />
          </S.CreateFacultyBlock1Right>
        </S.CreateFacultyBlock1>
        <S.CreateFacultyBlock1>
          <S.CreateFacultyLeftTitle>Location:</S.CreateFacultyLeftTitle>
          <S.CreateFacultyBlock1Right>
            <input placeholder="Enter Username" />
          </S.CreateFacultyBlock1Right>
        </S.CreateFacultyBlock1>
        <S.BottomBtn>
          <div>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.CancelBtn>Cancel</S.CancelBtn>
          </div>
        </S.BottomBtn>
      </S.CreateFacultyContainer>
    </S.CreateFacultyLayout>
  );
};

export default CreateFaculty;
