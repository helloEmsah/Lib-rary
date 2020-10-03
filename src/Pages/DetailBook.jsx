import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import fakeBook from "../Dummy/Book.json";
import imageTest from '../Images/profileIcon.png'

function DetailBook() {
  const { id } = useParams();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const data = fakeBook.filter((item) => item.id == id);

  return (
    <>
      <Container>
        <Row>
          <Col lg={5}>
            <img style={{display:"block", width: "300px", height: "350px"}} src={imageTest} alt=""/>
          </Col>
          <Col lg={7} className="d-flex flex-column ">
            <h1>Title here</h1>
            <p>Author here</p>
            <h4>Publication Date</h4>
            <p>date here</p>
            <h4>Category</h4>
            <p>category here</p>
            <h4>Pages</h4>
            <p>pages here</p>
            <h4>ISBN</h4>
            <p>isbn number here</p>
          </Col>
        </Row>
        <Row>
          <hr/>
          <Col>
            <h1>About book here</h1>
<p>Lorem Ipsum Pala Kau</p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam maxime dignissimos impedit totam doloribus in officia est voluptatibus eos, veritatis quos distinctio perferendis atque aspernatur temporibus voluptas error. Ex.</p><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ipsam maxime dignissimos impedit totam doloribus in officia est voluptatibus eos, veritatis quos distinctio perferendis atque aspernatur temporibus voluptas error. Ex.</p>
 
          </Col>
        </Row>
          <div className="d-flex justify-content-end">
            
            <button className='btn btn-danger'>
Add Library
            </button>
            
            <button className='btn btn-secondary'>
Add Library
            </button>
          </div>
      </Container>
    </>
 )
}

export default DetailBook;
