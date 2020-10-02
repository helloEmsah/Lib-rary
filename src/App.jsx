import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import Sidebar from "./Components/Home/Sidebar";
import MyLibrary from "./Components/Home/MyLibrary";
import Profile from './Pages/Profile'
import DetailBook from './Pages/DetailBook'
import NotFound from "./Pages/NotFound";
import readBook from './Components/Home/ReadBook'
import Test from './Pages/test'
import "./Styles/Index.css";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
              <Route exact path="/detailbook" component={DetailBook} />
              <Route exact path = "/readbook" component={readBook}/>
              <Route exact path = "/test" component={Test}/>
        <Container fluid>
          <Row>
            <Col lg={3}>
              <Sidebar />
            </Col>
            <Col lg={9}>
              <Route exact path="/home" component={Home} />
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/mylibrary" component={MyLibrary} />
            </Col>
          </Row>
        </Container>
      </Switch>
    </Router>
  );
}

export default App;
