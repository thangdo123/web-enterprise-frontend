import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";
import { DEVICES } from "../../../config/responsiveBreakpoints";
import { NavLink } from "react-router-dom";

export const SidebarMenu = styled.div`
  display: none;
  @media ${DEVICES.TABLET} {
    display: block;
  }
`;

export const SidebarMenuContainer = styled(Offcanvas)`
  width: 300px;
`;

export const SideBarLink = styled(NavLink)`
  text-decoration: none;
`;
