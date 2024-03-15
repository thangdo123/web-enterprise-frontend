import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderItem = styled(NavLink)<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
  text-decoration: none;
  color: ${({ isSelected }) => (isSelected ? "var(--blue)" : "var(--black)")};
  padding: var(--s-4);

  &:hover {
    background-color: var(--blue-light);
    color: var(--blue);
  }
`;

const Icon = styled.div`
  display: block;
`;

const Title = styled.div`
  display: block;
  padding-right: var(--s-12);
  white-space: nowrap;
`;

export { HeaderItem, Icon, Title };
