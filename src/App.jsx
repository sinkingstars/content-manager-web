import React, { Fragment } from "react";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//ROUTES
import Login from "./components/login/login";

//PERSONAS
import PersonasTable from "./components/personas/table/personasTable";
import PersonasCrud from "./components/personas/crud/personasCrud";

//PROJETOS
import ProjetosTable from "./components/projetos/table/projetosTable";
import ProjetosCrud from "./components/projetos/crud/projetosCrud";

//DASHBOARD
import Dashboard from "./components/dashboard/dashboard";

import ArtigosTable from "./components/artigos/table/artigosTable";
import ArtigosCrud from "./components/artigos/crud/artigosCrud";

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

            <Route path="/personas-table">
              <PersonasTable />
            </Route>
            <Route path="/personas-crud">
              <PersonasCrud />
            </Route>

            <Route path="/projetos-table">
              <ProjetosTable />
            </Route>
            <Route path="/projetos-crud">
              <ProjetosCrud />
            </Route>

            <Route path="/artigos-table">
              <ArtigosTable />
            </Route>
            <Route path="/artigos-crud">
              <ArtigosCrud />
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
