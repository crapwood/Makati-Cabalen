import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/homepage/index";
import Nav from "./pages/navbar/navbar";

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
