import React, { FormEvent, useState } from "react";
import * as S from "./CreateFaculty.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { createFaculty } from "../../../../store/slices/faculties";

const CreateFaculty = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleNewFaculty = ({ name }: { name: string }) =>
    dispatch(createFaculty({ name }));

  const [nameInput, setNameInput] = useState<string>("");
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleNewFaculty({ name: nameInput });
  };
  return (
    <S.CreateFacultyLayout>
      <S.CreateFacultyContainer onSubmit={handleOnSubmit}>
        <S.CreateFacultyBlock1>
          <S.CreateFacultyLeftTitle>Name:</S.CreateFacultyLeftTitle>
          <S.CreateFacultyBlock1Right>
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="Enter Username"
            />
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
