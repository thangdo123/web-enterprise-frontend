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
  /* overflow: auto; */
  gap: 20px;
  
  @media ${DEVICES.TABLET} {
    flex-direction: column;
  }
`;

const Chart = styled.div`
  width: 50%;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  @media ${DEVICES.TABLET} {
    width: 99%;
  }
  @media ${DEVICES.PHONE} {
    width: 99%;
    padding: var(--s-3);
  }
  box-shadow: var(--shadow-xl);
  border: var(--gray-light-2) solid 1px;
  border-radius: var(--br-lg);
  padding: var(--s-8);
`;

export const PieChart = styled.div`
  width: 50%;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  @media ${DEVICES.TABLET} {
    width: 99%;
  }
  box-shadow: var(--shadow-xl);
  border: var(--gray-light-2) solid 1px;
  border-radius: var(--br-lg);
  padding: var(--s-8);
  padding-bottom: var(--s-13);
`;

const ChartTitle = styled.div`
  color: var(--black);
  font-size: var(--fs-lg);
  font-weight: var(--fw-normal);
`;

export { PageContainer, Chart, ChartContainer, ChartTitle };

export const Block1 = styled.div`
  display: flex;
  justify-content: center;
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
