import styled from "styled-components";
import Button from "../../../../components/Button/Button";
import { DEVICES } from "../../../../config/responsiveBreakpoints";

const ToolBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
  @media ${DEVICES.TABLET} {
    display: none;
  }
`;

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--s-4);
  @media ${DEVICES.TABLET} {
    justify-content: flex-end;
  }
`;

const ToolSearchbar = styled.div`
  @media ${DEVICES.TABLET} {
    display: none;
  }
`;

const SearchbarIcon = styled.div`
  display: none;
  @media ${DEVICES.TABLET} {
    display: block;
  }
`;

const AddBtn = styled(Button)`
  background-color: var(--blue);
`;

export {
  ToolBarContainer,
  Title,
  ToolBar,
  AddBtn,
  ToolSearchbar,
  SearchbarIcon,
};
