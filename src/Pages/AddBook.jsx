import React from "react";
import { Button, Container, DropdownButton, Form } from "react-bootstrap";
import { TiDocumentAdd } from "react-icons/ti";
import style from "../Styles/styles";

function AddBook() {
  return (
    <>
      <Container fluid>
        <h1
          style={{
            fontFamily: "Times New Roman",
            fontWeight: "bold",
            fontSize: 30,
            lineHeight: "37px",
          }}
        >
          Add Book
        </h1>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Publication Date" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Category" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Page" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="ISBN" />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="About this book"
            />
          </Form.Group>
          <div className="attachmentButton">
            <DropdownButton variant="secondary" title="Add Book">
              <form action="/addbook" method="post">
                <input type="file" name="bookFile" />
              </form>{" "}
            </DropdownButton>
          </div>
          <div className="submitBookButton" style={{ float: "right" }}>
            <Button style={style.orangeButton}>
              Submit Book <TiDocumentAdd />{" "}
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default AddBook;
