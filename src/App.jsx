import React, { Fragment } from "react";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container } from "react-bootstrap";

//ROUTES
import PersonasTable from "./components/personas/table/personasTable";
import PersonasCrud from "./components/personas/crud/personasCrud"

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>git 
        <Navbar></Navbar>
        <Container>
          <Switch>
            <Route path="/personastable">
              <PersonasTable />
            </Route>
            <Route path="/personascrud">
              <PersonasCrud />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
