import React from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

//CSS
import "./navbar.css";

//TODO: Ajustar o responsivo da navbar
function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <BootstrapNavbar.Brand>Content Manager</BootstrapNavbar.Brand>
      <Nav className="mr-auto">
        <Link className="mr-3" to="/dashboard">Dashboard</Link>
        <Link className="mr-3" to="/projetos-table">Projetos</Link>
        <Link className="mr-3" to="/personas-table">Personas</Link>
        <Link className="mr-3" to="/login">Login</Link>
      </Nav>
      <Button variant="dark">
        <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
        Logout
      </Button>
    </BootstrapNavbar>
  );
}

export default Navbar;
