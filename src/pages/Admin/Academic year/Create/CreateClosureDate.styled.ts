import styled from "styled-components";
import { DEVICES } from "../../../../config/responsiveBreakpoints";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.form`
  padding: var(--s-8) 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--s-8);
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${DEVICES.TABLET} {
    flex-direction: column;
    gap: var(--s-5);
  }
`;

export const SetDateBlock = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

export const LeftTitle = styled.div`
  font-weight: bold;
  font-size: var(--fs-md);
`;

export const RightCalendar = styled.div`
  input {
    border: var(--gray) solid 1px;
    border-radius: 5px;
    font-size: 20px;

    @media ${DEVICES.TABLET} {
      font-size: var(--fs-md);
    }
  }
`;

export const BottomBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--s-4);
`;

export const SaveBtn = styled.button`
  background-color: var(--blue);
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const CancelBtn = styled.button`
  background-color: var(--red);
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
