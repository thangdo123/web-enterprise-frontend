import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import * as S from "./SideBar.styled";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <S.SidebarMenu id="side-bar-menu">
      <Button variant="secondary" onClick={handleShow}>
        <i className="bi bi-layout-sidebar-inset"></i>
      </Button>
      <S.SidebarMenuContainer show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <h1>Menu</h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <S.SideBarLink to="/home">
            <h2>Home</h2>
          </S.SideBarLink>
          <S.SideBarLink to="/products">
            <h2>Products</h2>
          </S.SideBarLink>
          <S.SideBarLink to="/review">
            <h2>Review</h2>
          </S.SideBarLink>
        </Offcanvas.Body>
      </S.SidebarMenuContainer>
    </S.SidebarMenu>
  );
};

export default Sidebar;
