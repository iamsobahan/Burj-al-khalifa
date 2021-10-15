import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Book from "./components/Book/Book";
import Header from "./components/Header/Header";
import Authprovider from "./components/Authprovider/Authprovider";
import Privateroute from "./components/Privateroute/Privateroute";

function App() {
  return (
    <Authprovider>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Privateroute path="/book">
            <Book />
          </Privateroute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Authprovider>
  );
}

export default App;
