import styled from "styled-components";
import { DEVICES } from "../../config/responsiveBreakpoints";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: fit-content;
  min-height: 100vh;
  box-shadow: var(--shadow-md);

  @media ${DEVICES.TABLET} {
    box-shadow: none;
    position: fixed;
    z-index: 2;
    bottom: 0;
  }
`;

export { HeaderContainer };
