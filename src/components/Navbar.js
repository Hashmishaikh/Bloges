import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

const Navbars = () => {
  return (
    <div className="navii">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  exact
                  activeClassName="home"
                  className="posthome"
                  to="/"
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink activeClassName="home" className="posthome" to="/post">
                  Post
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
