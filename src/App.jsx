import React, { Fragment } from "react";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container } from "react-bootstrap";

//ROUTES
import Login from "./view/login/login"
import PersonasTable from "./components/personas/table/personasTable";
import PersonasCrud from "./components/personas/crud/personasCrud";
import ProjetosTable from "./components/personas/table/projetosTable"
import Dashboard from "./components/dashboard/dashboard";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Fragment>
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
            <Route path="/projetostable">
              <ProjetosTable/>
            </Route>
            <Route path="/personascrud">
              <PersonasCrud />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Container>
      </Router>
    </Fragment>
  );
}

export default App;
