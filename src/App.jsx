import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Sidebar from "./Components/Home/Sidebar";
import MyLibrary from "./Components/Home/MyLibrary";
import DetailBook from "./Components/Home/DetailBook";
import NotFound from "./Pages/NotFound";
import "./Styles/Index.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Container fluid>
          <Row>
            <Col lg={3}>
              <Sidebar />
            </Col>
            <Col lg={9}>
              <Route exact path="/home" component={Home} />
              <Route exact path="/mylibrary" component={MyLibrary} />
              <Route exact path="/detailbook" component={DetailBook} />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
