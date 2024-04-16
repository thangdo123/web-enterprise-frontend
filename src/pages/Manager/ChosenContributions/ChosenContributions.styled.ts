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

export { PageContainer };
