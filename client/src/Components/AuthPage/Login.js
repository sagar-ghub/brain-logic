import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import authApis from "../../api/authApis";

export default function Login({ setUser, setAuth }) {
  let history = useHistory();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    authApis
      .login(formData)
      .then((res) => {
        setLoading(false);
        if (res.status == 200) {
          setAuth(res.data.user);

          history.push("/");
        } else {
          setAuth(null);
          console.log(res.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data.error);
        setAuth(null);
      });
  };
  return (
    <div
      className="register d-flex justify-content-center"
      // style={{ marginBottom: "250px" }}
    >
      <Row className="register-card">
        <Col md={12} className="auth_header text-center">
          <h3>Login Page</h3>
        </Col>
        <Col md={12} className="text-center">
          <Form onSubmit={handleSubmit} method="post">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <div className="text-center">
              <Button variant="primary" type="submit">
                {loading ? <Spinner></Spinner> : "Login"}
              </Button>
            </div>
            <div className="text-end">
              <a href="/register">Register</a>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
