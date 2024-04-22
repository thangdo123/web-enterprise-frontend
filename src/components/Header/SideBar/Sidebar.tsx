import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import * as S from "./SideBar.styled";
import { ITopHeader } from "../../../interfaces";
import "./SideBarStyle.css";

const Sidebar = ({ headerLink }: { headerLink: ITopHeader[] }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <S.SidebarMenu >
      <Button variant="secondary" onClick={handleShow}>
        <i className="bi bi-layout-sidebar-inset"></i>
      </Button>
      <S.SidebarMenuContainer show={show} onHide={handleClose} id="side-bar-menu">
        <Offcanvas.Header closeButton>
          <h1>Menu</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {headerLink.map(({ name, path }, index) => (
            <S.SideBarLink key={index} to={path}>
              <h2>{name}</h2>
            </S.SideBarLink>
          ))}
        </Offcanvas.Body>
      </S.SidebarMenuContainer>
    </S.SidebarMenu>
  );
};

export default Sidebar;
