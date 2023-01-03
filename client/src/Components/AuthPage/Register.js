import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import apis from "../../api/api";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  let history = useHistory();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    name: "",
    branch: "",
    year: "",
    mobile: "",
    birthday: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    apis
      .register(formData)
      .then((res) => {
        console.log(res.data);
        toast.success(
          "Registered Successfully! You will recieve confirmation email shortly"
        );
        setFormData({
          email: "",
          password: "",
          name: "",
          branch: "",
          year: "",
          mobile: "",
          birthday: "",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="register d-flex justify-content-center">
      <Row className="register-card">
        <Col md={12} className="auth_header text-center">
          <h3>Register Page</h3>
        </Col>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Col md={12} className="text-center">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Enter Name"
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Enter Branch CSE CSE-AIML ETC CST "
                name="branch"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Year of passing</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Enter YOP"
                name="year"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Enter Mobile"
                name="mobile"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                onChange={handleChange}
                placeholder="Enter D.O.B"
                name="birthday"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={handleChange}
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={handleChange}
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <div className="text-center">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
