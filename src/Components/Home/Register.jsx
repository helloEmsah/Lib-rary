import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import style from "../../Styles/styles";

function Register() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button id="signUpButton" style={style.orangeButton} onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is form</p>
          <Button style={style.orangeButton}>Sign Up</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
