import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//ROUTES
import Personas from "./components/personas/table/personasTable";

//CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route path="/personas">
            <Personas />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
