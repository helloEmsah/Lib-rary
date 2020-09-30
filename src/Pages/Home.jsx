import React from "react";
import { Col, Row, Container } from 'react-bootstrap'
import Sidebar from "../Components/Home/Sidebar";
import Content from "../Components/Home/Content";

function Home() {
  return (
      <Container fluid>
        <Row>
          <Col lg={3}>
            <Sidebar />
          </Col>
          <Col lg={9}>
            <Content />
          </Col>
        </Row>
      </Container>
  );
}

export default Home;
