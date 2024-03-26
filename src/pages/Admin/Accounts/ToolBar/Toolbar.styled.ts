import styled from "styled-components";
import Button from "../../../../components/Button/Button";

const ToolBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-lg);
  font-weight: var(--fw-bold);
`;

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
`;

const AddBtn = styled(Button)`
  background-color: var(--blue);
`;

export { ToolBarContainer, Title, ToolBar, AddBtn };