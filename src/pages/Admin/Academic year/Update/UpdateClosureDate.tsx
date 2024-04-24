import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./UpdateClosureDate.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { updateAcademicYearById } from "../../../../store/slices/Admin/academicYear";
import { setNotification } from "../../../../store/slices/notification";
import { ENotificationType } from "../../../../enum";

interface IAcademicYearUpdateProps {
  onClose: () => void;
  closureDate: string;
  finalClosureDate: string;
  academicYearId: string;
}

const UpdateClosureDate = ({
  onClose,
  closureDate,
  academicYearId,
  finalClosureDate,
}: IAcademicYearUpdateProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const [closureDateInput, setClosureDateInput] = useState<string>("");
  const [finalClosureDateInput, setFinalClosureDateInput] =
    useState<string>("");
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
    const selectedAcademicYear = {
      academicYearId: academicYearId,
      closure_date: new Date(closureDateInput).toISOString(),
      final_closure_date: new Date(finalClosureDateInput).toISOString(),
    };
    dispatch(updateAcademicYearById(selectedAcademicYear))
      .unwrap()
      .then((action) => {
        dispatch(
          setNotification({
            message: action.message,
            type: ENotificationType.Success,
          }),
        );
      })
      .catch((rejectedValueOrSerializedError) => {
        dispatch(
          setNotification({
            message: rejectedValueOrSerializedError.response.data.message,
            type: ENotificationType.Error,
          }),
        );
      });
  };

  useEffect(() => {
    setClosureDateInput(closureDate);
    setFinalClosureDateInput(finalClosureDate);
  }, [closureDate, finalClosureDate]);
  return (
    <S.Layout>
      <S.Container onSubmit={handleOnSubmit}>
        <S.InputContainer>
          <S.SetDateBlock>
            <S.LeftTitle>Closure Date:</S.LeftTitle>
            <S.RightCalendar>
              <input
                type="datetime-local"
                value={closureDateInput}
                onChange={(e) => setClosureDateInput(e.target.value)}
                name=""
              />
            </S.RightCalendar>
          </S.SetDateBlock>
          <S.SetDateBlock>
            <S.LeftTitle>Final Closure Date:</S.LeftTitle>
            <S.RightCalendar>
              <input
                type="datetime-local"
                value={finalClosureDateInput}
                onChange={(e) => setFinalClosureDateInput(e.target.value)}
                name=""
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

export default UpdateClosureDate;
