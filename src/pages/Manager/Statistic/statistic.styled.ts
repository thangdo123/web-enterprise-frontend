import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--s-4);
  padding-right: var(--s-4);
  width: 100%;
  gap: var(--s-4);
`;

const ChartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
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
