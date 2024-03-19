import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: var(--s-8);
  width: 70%;
  display: flex;
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
    input{
        border: var(--gray) solid 1px;
        border-radius: 5px;
        font-size: 20px;
    }
`;
