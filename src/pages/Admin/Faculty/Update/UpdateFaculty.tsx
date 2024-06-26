import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./UpdateFaculty.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { updateFacultyById } from "../../../../store/slices/Admin/faculties";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

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
    dispatch(updateFacultyById(selectedFaculty))
      .unwrap()
      .then((action) => {
        dispatch(
          setNotification({
            message: action.message,
            type: ENotificationType.Success,
          }),
        );
      })
      .catch((message) => {
        dispatch(
          setNotification({
            message: message,
            type: ENotificationType.Error,
          }),
        );
      });
  };

  useEffect(() => {
    setNameInput(facultyInput);
  }, [facultyInput]);
  return (
    <S.CreateFacultyLayout>
      {facultyInput && (
        <S.CreateFacultyContainer onSubmit={handleOnSubmit}>
          <S.CreateFacultyBlock1>
            <S.CreateFacultyLeftTitle>Name:</S.CreateFacultyLeftTitle>
            <S.CreateFacultyBlock1Right>
              <input
                value={nameInput}
                type="text"
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Enter Faculty"
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
      )}
    </S.CreateFacultyLayout>
  );
};

export default UpdateFaculty;
