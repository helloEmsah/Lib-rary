import React from "react";

import fakeBook from "../../Dummy/Book.json"
import {Card, Col, Row, Container} from "react-bootstrap";

function MyLibrary() {
  return (
      <Container >
      <h1>My Library</h1>
      <Card style={{border: "none"}}>
        <Card.Body>
        <Row>
          {fakeBook.map((data) => 
          <Col lg={3}>
            <Card border="dark">
            <Card.Body  >
              <div id="bookImageContainer">
                <img className="bookImage" src={data.image} alt="" srcset=""/>
            </div> 
            </Card.Body>
          </Card>
          <div id="bookCardDescription">
                <p className="bookTitle">{data.title}</p>
                <p className="bookAuthor">{data.author}</p>
          </div> 
          </Col>
          )}        
        </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyLibrary;
