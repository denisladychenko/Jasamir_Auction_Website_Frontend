import React from "react";
import { Modal, Button } from 'react-bootstrap';

import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import Container from "./Container";
import "./CenteredModal.css";

const CenteredModal = props => {
    return (
        //Modal
        <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-header" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Join Loveantiques Mailing List
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="mailing-list-form" action="#">
        <Container className="form-group row">
          <Label for="fName">First Name:</Label>
          <Container className="col-sm-12">
            <Input className="form-control" type="text" name="fName"/>
          </Container>
        </Container>
        <Container className="form-group row">
          <Label for="lName">Last Name:</Label>
          <Container className="col-sm-12">
            <Input className="form-control" type="text" name="lName"/>
          </Container>
        </Container>
        <Container className="form-group row">
          <Label for="email">Email:</Label>
          <Container className="col-sm-12">
            <Input className="form-control" type="email" name="email" required/>
          </Container>
        </Container>
        <Container className="form-group row">
          <Label for="address">Mailing Address:</Label>
          <Container className="col-sm-12">
            <Input className="form-control" type="text" name="address"/>
          </Container>
        </Container>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn btn-danger">Maybe Later</Button>
        <Button className="btn btn-success">Join Our List</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default CenteredModal;
