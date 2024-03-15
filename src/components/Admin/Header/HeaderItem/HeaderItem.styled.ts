import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderItem = styled(NavLink)`
  display: flex;
  flex-direction: row;
  gap: var(--s-4);
  text-decoration: none;
  color: var(--black);
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
`;

export { HeaderItem, Icon, Title };
