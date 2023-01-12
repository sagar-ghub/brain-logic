import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function Notice() {
  return (
    <div>
      <Row>
        <Col>
          <h1>Notice</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>Title</p>
          <input type="text" placeholder="Title" />
          <br />
          <p>Description</p>
          <textarea type="text" placeholder="Description" />
          <br />

          <Button>Submit</Button>
        </Col>
      </Row>
    </div>
  );
}
