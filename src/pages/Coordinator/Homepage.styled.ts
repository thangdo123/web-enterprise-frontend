import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const Container = styled.div`
  width: 95%;
`;

export const Block1 = styled.div`
  padding: var(--s-12);
  text-align: center;
  border-bottom: var(--gray-light-2) solid 1px;
`;

export const Block1Title = styled.div`
  font-family: "Times New Roman", Times, serif;
  font-size: var(--fs-4xl);
  font-weight: var(--fw-semibold);
`;

export const Block1Desciption = styled.div`
  font-family: "Times New Roman", Times, serif;
`;

export const Block2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Block2Left = styled.div``;

export const Block2Right = styled.div``;

export const Block3 = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1.5%;
  padding-top: var(--s-7);
`;

export const Block3Items = styled.div`
  cursor: pointer;
  width: 250px;
  margin-bottom: var(--s-5);
  border: var(--gray-light-2) solid 1px;
  @media (max-width: 534px) {
    width: 350px;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 230px;
  @media (max-width: 534px) {
    height: 320px;
  }
`;

export const ItemBottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-top: var(--gray-light-2) solid 1px;
  padding: var(--s-6);
`;

export const ItemTitle = styled.div``;

export const EmtyItemText = styled.div`
  text-align: center;
  font-size: var(--fs-4xl);
  font-family: "Times New Roman", Times, serif;
  font-weight: var(--fw-semibold);
  padding: var(--s-8) 0;
`;

export const ItemStatus = styled.div<{ $isChosen: boolean }>`
  color: ${({ $isChosen }) => ($isChosen ? "var(--green)" : "var(--red)")};
`;

export const NotificationBtn = styled.div`
  cursor: pointer;
  i {
    color: white;
  }
  position: absolute;
  right: var(--s-13);
  top: var(--s-7);
  background-color: var(--blue-2);
  padding: var(--s-2) var(--s-3);
  border-radius: var(--br-2xl);
  @media ${DEVICES.PHONE} {
    right: var(--s-3);
    top: var(--s-3);
  }
`;

export const NotificationCount = styled.div`
  background-color: var(--red);
  border-radius: var(--br-2xl);
  color: white;
  font-size: 10px;
  padding: 0 4px;
  position: absolute;
  right: var(--s-13);
  top: var(--s-7);
  @media ${DEVICES.PHONE} {
    right: var(--s-3);
    top: var(--s-3);
  }
`;
