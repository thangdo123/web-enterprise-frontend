import React, { FormEvent, useState } from "react";
import * as S from "./CreateClosureDate.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { createAcademicYear } from "../../../../store/slices/Admin/academicYear";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

const CreateClosureDate = ({ onClose }: { onClose: () => void }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [closureDate, setClosureDate] = useState<string>("");
  const [finalClosureDate, setFinalClosureDate] = useState<string>("");

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
    console.log(closureDate);
    console.log(finalClosureDate);
    const newAcademicYear = {
      closure_date: new Date(closureDate).toISOString(),
      final_closure_date: new Date(finalClosureDate).toISOString(),
    };
    dispatch(createAcademicYear(newAcademicYear))
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
  return (
    <S.Layout>
      <S.Container onSubmit={handleOnSubmit}>
        <S.InputContainer>
          <S.SetDateBlock>
            <S.LeftTitle>Closure Date:</S.LeftTitle>
            <S.RightCalendar>
              <input
                type="datetime-local"
                value={closureDate}
                onChange={(e) => setClosureDate(e.target.value)}
                name="closure_date"
                required
              />
            </S.RightCalendar>
          </S.SetDateBlock>
          <S.SetDateBlock>
            <S.LeftTitle>Final Closure Date:</S.LeftTitle>
            <S.RightCalendar>
              <input
                type="datetime-local"
                value={finalClosureDate}
                onChange={(e) => setFinalClosureDate(e.target.value)}
                name="final_closure_date"
                required
              />
            </S.RightCalendar>
          </S.SetDateBlock>
        </S.InputContainer>
        <S.BottomBtn>
          <S.SaveBtn type="submit">Save</S.SaveBtn>
          <S.CancelBtn type="button" onClick={onClose}>
            Cancel
          </S.CancelBtn>
        </S.BottomBtn>
      </S.Container>
    </S.Layout>
  );
};

export default CreateClosureDate;
