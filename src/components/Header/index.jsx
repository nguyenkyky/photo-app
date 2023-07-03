import React from "react";
import { NavLink } from "react-router-dom";
import { Col,Container,Row } from "reactstrap";
import "./Header.scss"


function Header() {
    return (
        <header className="header">
        <Container>
          <Row className="justify-content-between">
            <Col xs="auto">
              <a
                className="header__link header__title"
                href="https://facebook.com/nguyenkyct"
                target="_blank"                                                                 
                rel="noopener noreferrer"
                // 2 dong cuoi de mo trong tab moi
              >
                Cao Ky Nguyen
              </a>
            </Col>
            <Col xs="auto">
            <NavLink
              
              className={(navData) => navData.isActive ? "header__link--active" : "header__link"}
              to="/photos"
              
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
    
}

export  default Header;