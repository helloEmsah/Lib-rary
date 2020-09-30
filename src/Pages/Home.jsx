import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Components/Home/Sidebar";
import Content from "../Components/Home/Content";

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
