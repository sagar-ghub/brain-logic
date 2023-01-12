import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import apis from "../../api/api";
import { ToastContainer, toast } from "react-toastify";

export default function Questions() {
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    input: "",
    output: "",
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    setLoading(true);
    apis
      .createQuestion(formData)
      .then((res) => {
        setLoading(false);
        toast.success("Added Successfully");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err);
      });
  };
  return (
    <div>
      <Row>
        <Col>
          <h1>Question Add</h1>
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
      </Row>
      <Row>
        <Col className="text-center">
          <p>Question Name</p>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={formData.title}
          />
          <br />
          <p>Description</p>
          <textarea
            type="text"
            placeholder="Description"
            name="decription"
            onChange={handleChange}
            value={formData.description}
          />
          <br />
          <p>Custom Input</p>
          <textarea
            type="text"
            placeholder="Input Test Case"
            name="input"
            onChange={handleChange}
            value={formData.input}
          />
          <br />
          <p>Custom Output</p>
          <textarea
            type="text"
            placeholder="Ouput"
            name="output"
            onChange={handleChange}
            value={formData.output}
          />
          <br />

          <Button onClick={handleSubmit}>Submit</Button>
        </Col>
      </Row>
    </div>
  );
}
