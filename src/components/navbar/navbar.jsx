import React from "react";
import { Navbar as BootstrapNavbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <BootstrapNavbar.Brand href="#">Content Manager</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Projetos</Nav.Link>
        <Nav.Link>
          <Link to="/personastable">Personas</Link>
        </Nav.Link>
      </Nav>
      <Button variant="dark">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Logout
      </Button>
    </BootstrapNavbar>
  );
}

export default Navbar;
