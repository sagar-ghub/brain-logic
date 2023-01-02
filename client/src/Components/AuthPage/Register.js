import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function Register() {
  return (
    <div className="register d-flex justify-content-center">
      <Row className="register-card">
        <Col md={12} className="auth_header text-center">
          <h3>Register Page</h3>
        </Col>
        <Col md={12} className="text-center">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Branch</Form.Label>
              <Form.Control type="text" placeholder="Enter Branch" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Year of passing</Form.Label>
              <Form.Control type="text" placeholder="Enter YOP" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control type="date" placeholder="Enter D.O.B" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <div className="text-center">
              <Button variant="primary">Register</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
