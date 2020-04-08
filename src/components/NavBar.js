import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" className="justify-content-center">
        <Nav>
          <Nav.Link href="#">architecture</Nav.Link>
          <Navbar.Brand href="#" className="mx-5">AO CoDGSN</Navbar.Brand>
          <Nav.Link href="#">consignment</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
