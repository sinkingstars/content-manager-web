import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container } from "react-bootstrap";

//ROUTES
import PersonasTable from "./components/personas/table/personasTable";
import PersonasCrud from "./components/personas/crud/personasCrud";
import Dashboard from "./components/dashboard/dashboard";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <Container>
          <Switch>
          <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/personastable">
              <PersonasTable />
            </Route>
            <Route path="/personascrud">
              <PersonasCrud />
            </Route>
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}

export default App;
