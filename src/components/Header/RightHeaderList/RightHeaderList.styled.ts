import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";

const RightHeaderList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-4);
  width: 100%;
  justify-content: flex-end;
`;

const RightListItem = styled.div`
  color: var(--black);
  padding: var(--s-3) var(--s-2);
  cursor: pointer;
  border-bottom: 1px solid white;

  &:hover {
    background-color: var(--gray-light);
    border-bottom: 1px solid var(--blue);
    color: var(--blue);
  }
  @media ${DEVICES.PHONE}{
    i{
      display: none;
    }
  }
`;

export { RightHeaderList, RightListItem };
