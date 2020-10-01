import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import profileIcon from "../../Images/profileIcon.png";

function CardBook() {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row>
            {/* map product here later */}
            <Col md={3}>
              <Card.Body>
                {/* insert product here */}
                <img
                  style={{ height: 200, width: 150 }}
                  src={profileIcon}
                  alt=""
                />
              </Card.Body>
              <Card.Title>title</Card.Title>
              <Card.Footer>author</Card.Footer>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardBook;
