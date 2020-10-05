import React from "react";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <BootstrapNavbar.Brand href="#">Content Manager</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Projetos</Nav.Link>
        <Nav.Link>
          <Link to="/personas">Personas</Link>
        </Nav.Link>
      </Nav>
    </BootstrapNavbar>
  );
}

export default Navbar;
