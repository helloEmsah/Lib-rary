import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Sidebar from "./Components/Home/Sidebar";
import MyLibrary from "./Components/Home/MyLibrary";
import Profile from "./Pages/Profile";
import DetailBook from "./Pages/DetailBook";
import AddBook from "./Pages/AddBook";
import TopNav from "./Components/Home/TopNav";
import "./Styles/Index.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />

        <Container fluid>
          <TopNav />
          <Row>
            <Col lg={2}>
              <Sidebar />
            </Col>
            <Col lg={10}>
              <Route exact path="/home" component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/mylibrary" component={MyLibrary} />
              <Route exact path="/addbook" component={AddBook} />
              <Route exact path="/detailbook" component={DetailBook} />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
