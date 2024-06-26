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

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
`;

export { PageContainer, ToolBar, Title };
