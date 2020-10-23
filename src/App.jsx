import React, { Fragment } from "react";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import store from "../src/store/";
import { Provider } from "react-redux";

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
import NovoUsuario from "./components/novo-usuario/novo-usuario.jsx";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Container>
            <Switch>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>

              <Route exact path="/personas-table">
                <PersonasTable />
              </Route>
              <Route exact path="/personas-crud">
                <PersonasCrud />
              </Route>

              <Route exact path="/projetos-table">
                <ProjetosTable />
              </Route>
              <Route path="/projetos-crud">
                <ProjetosCrud />
              </Route>

              <Route exact path="/artigos-table">
                <ArtigosTable />
              </Route>
              <Route exact path="/artigos-crud">
                <ArtigosCrud />
              </Route>

              <Route exact path="/cadastro">
                <NovoUsuario />
              </Route>
            </Switch>
          </Container>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
