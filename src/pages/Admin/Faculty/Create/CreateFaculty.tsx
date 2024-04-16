import React, { FormEvent, useState } from "react";
import * as S from "./CreateFaculty.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { createFaculty } from "../../../../store/slices/Admin/faculties";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

const CreateFaculty = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [nameInput, setNameInput] = useState<string>("");
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
    const newFaculty = { name: nameInput };
    dispatch(createFaculty(newFaculty));
    dispatch(
      setNotification({
        message: "New faculty is created successfully",
        type: ENotificationType.Success,
      }),
    );
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
              required
            />
          </S.CreateFacultyBlock1Right>
        </S.CreateFacultyBlock1>
        <S.BottomBtn>
          <S.SaveBtn type="submit">Save</S.SaveBtn>
          <S.CancelBtn type="button" onClick={onClose}>
            Cancel
          </S.CancelBtn>
        </S.BottomBtn>
      </S.CreateFacultyContainer>
    </S.CreateFacultyLayout>
  );
};

export default CreateFaculty;
