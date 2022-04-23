import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import './Navbar.css'

const Navbars = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink exact activeClassName="home" className="posthome" to="/">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="home" className="posthome" to="/post">Post</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
