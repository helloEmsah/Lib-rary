import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import MyLibrary from "./Components/Home/MyLibrary";
import DetailBook from "./Components/Home/DetailBook";
import NotFound from "./Pages/NotFound";
import "./Styles/Index.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/mylibary" component={MyLibrary} />
        <Route path="/detailbook" component={DetailBook} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
