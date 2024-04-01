import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./UpdateFaculty.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { updateFacultyById } from "../../../../store/slices/Admin/faculties";

interface IFacultyUpdateProps {
  onClose: () => void;
  facultyInput: string;
  facultyId: string;
}

const UpdateFaculty = ({
  onClose,
  facultyInput,
  facultyId,
}: IFacultyUpdateProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [nameInput, setNameInput] = useState<string>(facultyInput);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
    const selectedFaculty = { facultyId: facultyId, name: nameInput };
    dispatch(updateFacultyById(selectedFaculty));
  };

  useEffect(() => {
    setNameInput(facultyInput);
  }, [facultyInput]);
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
            <S.CancelBtn onClick={onClose}>Cancel</S.CancelBtn>
          </div>
        </S.BottomBtn>
      </S.CreateFacultyContainer>
    </S.CreateFacultyLayout>
  );
};

export default UpdateFaculty;
