import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import fakeBook from "../Dummy/Book.json";



function DetailBook() {
  const { id } = useParams;

    const data = fakeBook.filter((item) => item.id == id))

  return (
    <>
      <Container>
        {fakeBook.map((data) => (
          <h1>{data.title}</h1>
        ))}
      </Container>
    </>
  );
}

export default DetailBook;
