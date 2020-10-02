import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import fakeBook from "../Dummy/Book.json";



function DetailBook() {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false)
  const data = fakeBook.filter((item) => item.id ==id)

  return (
    <>
      <Container>
        <Row>
          <Col lg={8}>
            <Card>
              <Row>
                <Col lg={6}>
                  <h1>test: {data[0].pages}</h1>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DetailBook;
