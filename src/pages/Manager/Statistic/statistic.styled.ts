import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--s-4);
  padding-right: var(--s-4);
  width: 100%;
  gap: var(--s-4);
  @media ${DEVICES.TABLET} {
    padding: var(--s-4);
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  gap: 20px;
`;

const Chart = styled.div`
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ChartTitle = styled.div`
  color: var(--black);
  font-size: var(--fs-lg);
  font-weight: var(--fw-normal);
`;

export { PageContainer, Chart, ChartContainer, ChartTitle };

export const Block1 = styled.div`
  display: flex;
  gap: 3%;
  @media ${DEVICES.TABLET} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Block1Items = styled.div`
  width: 25%;
  display: flex;
  padding: var(--s-5);
  box-shadow: var(--shadow-xl);
  border: var(--gray-light-2) solid 1px;
  border-radius: var(--br-lg);
  margin-bottom: var(--s-3);
  @media ${DEVICES.TABLET} {
    width: 75%;
  }
`;

export const Block1ItemLeft = styled.div`
  display: flex;
  align-items: center;
  color: var(--blue);
  background-color: var(--blue-light);
  padding: var(--s-1) var(--s-4);
  border-radius: var(--br-2xl);
  margin-right: var(--s-5);
`;

export const Block1ItemRight = styled.div`
  width: 70%;
`;

export const B1RightCount = styled.div``;

export const B1RightTitle = styled.div``;
