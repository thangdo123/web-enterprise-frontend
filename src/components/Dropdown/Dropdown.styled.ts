import styled from "styled-components";

const SortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const SortBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const TitleBtn = styled.div`
  font-weight: var(--fw-light);
  position: static;
`;

const SortOptionContainer = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: absolute;
  border-radius: var(--br-lg);
  top: 100%;
  cursor: pointer;
  padding: var(--s-2);
  flex-direction: column;
  box-shadow: var(--shadow-md);
  gap: var(--s-2);
  background-color: var(--white);
  overflow-y: scroll;
  height: var(--s-15);
`;

const SortOption = styled.div`
  display: block;
  white-space: nowrap;
  padding: var(--s-2);
  border-radius: var(--br-md);

  &:hover {
    background-color: var(--blue-light);
    color: var(--blue);
  }
`;
export { SortContainer, SortBtn, TitleBtn, SortOptionContainer, SortOption };
