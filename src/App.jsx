import React, { Fragment } from "react";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//ROUTES
import Personas from "./components/personas/table/personasTable";
import Projetos from './components/personas/table/projetosTable'

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Fragment>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/personas">
            <Personas />
          </Route>
          <Route path="/projetos">
            <Projetos/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
