import { NavLink as BaseNavLink } from "react-router-dom";
import styled from "styled-components";

const NavLink = styled(BaseNavLink)`
  text-decoration: none;
  color: var(--black);
  padding: var(--s-3) var(--s-2);

  &:hover {
    background-color: var(--gray-light);
    border-bottom: 1px solid var(--blue);
    color: var(--blue);
  }
`;

export { NavLink };
