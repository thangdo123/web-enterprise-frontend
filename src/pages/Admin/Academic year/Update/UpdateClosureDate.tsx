import React, { FormEvent, useEffect, useState } from "react";
import * as S from "./UpdateClosureDate.styled";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { updateAcademicYearById } from "../../../../store/slices/academicYear";

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

  const [closureDateInput, setClosureDateInput] =
    useState<string>(closureDate);
  const [finalClosureDateInput, setFinalClosureDateInput] = useState<string>(
    finalClosureDate
  );
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    onClose();
    const selectedAcademicYear = { academicYearId: academicYearId, closure_date: closureDateInput, final_closure_date: finalClosureDateInput };
    dispatch(updateAcademicYearById(selectedAcademicYear));
  };


  useEffect(() => {
    setClosureDateInput(closureDate);
    setFinalClosureDateInput(finalClosureDate);
  }, [closureDate, finalClosureDate]);
  return (
    <S.Layout>
      <S.Container onSubmit={handleOnSubmit}>
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
              value={finalClosureDate}
              onChange={(e) => setFinalClosureDateInput(e.target.value)}
              name=""
            />
          </S.RightCalendar>
        </S.SetDateBlock>
        <S.BottomBtn>
          <div>
            <S.SaveBtn type="submit">Save</S.SaveBtn>
            <S.CancelBtn onClick={onClose}>Cancel</S.CancelBtn>
          </div>
        </S.BottomBtn>
      </S.Container>
    </S.Layout>
  );
};

export default UpdateClosureDate;