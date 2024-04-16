import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

const ButtonContainer = styled.button`
  padding: var(--s-1) var(--s-4);
  color: var(--white);
  border-radius: var(--br-md);
  cursor: pointer;
  @media ${DEVICES.TABLET} {
    font-size: var(--fs-sm);
  }
`;

export { ButtonContainer };
