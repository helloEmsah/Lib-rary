import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import style from "../../Styles/styles";

function Login() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button id="signInButton" style={style.grayButton} onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <p style={{ fontWeight: 800 }}>Sign In</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="userEmail">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="userPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
          <Button block style={style.grayButton}>
            Sign In
          </Button>
          <br />
          <p id="modalRegularText">
            Don't have an account yet? Click
            <span style={{ fontWeight: 800 }}> here</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
