import styled from "styled-components";

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

  &:hover {
    background-color: var(--gray-light);
    border-bottom: 1px solid var(--blue);
    color: var(--blue);
  }
`;

export { RightHeaderList, RightListItem };
