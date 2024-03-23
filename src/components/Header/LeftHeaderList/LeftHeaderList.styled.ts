import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

const LeftHeaderList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-4);
  width: 100%;
  @media ${DEVICES.TABLET} {
    display: none;
  }
`;

export { LeftHeaderList };
