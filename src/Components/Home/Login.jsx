import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
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
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is form</p>
          <Button style={style.grayButton}>Sign In</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
