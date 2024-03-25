import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  margin-top: var(--s-8);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SetDateBlock = styled.div`
  width: 50%;
  display: flex;
  gap: 10px;
`;

export const LeftTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const RightCalendar = styled.div`
  input {
    border: var(--gray) solid 1px;
    border-radius: 5px;
    font-size: 20px;
  }
`;

export const BottomBtn = styled.div`
  display: flex;
  justify-content: center;
  div {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
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
