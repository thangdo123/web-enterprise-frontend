import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
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
  flex-wrap: wrap;
  gap: 1.5%;
  padding-top: var(--s-7);
`;

export const Block3Items = styled.div`
  cursor: pointer;
  width: 18.8%;
  padding-bottom: var(--s-5);
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const ItemBottomBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border: var(--gray-light-2) solid 1px;
  padding: var(--s-6);
`;

export const ItemTitle = styled.div``;

export const ItemStatus = styled.div<{ $isChosen: boolean }>`
  color: ${({ $isChosen }) => ($isChosen ? "var(--green)" : "var(--red)")};
`;
