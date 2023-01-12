import React, { useEffect, useState } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import apis from "../../api/api";
import TableComponent from "../TableComponent";
export default function Members() {
  const [response, setResponse] = useState([]);
  const headings = ["#", " Name", "Email", "Branch", "Year", "Phone"];
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await apis.getMembers();

        console.log(data.data);
        setResponse(data.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Row>
        <Col md={12} className="mt-5">
          {response.length > 0 ? (
            <Table striped bordered hover>
              <thead>
                <tr>
                  {headings.length > 0 &&
                    headings.map((heading, index) => {
                      return <th key={index}>{heading}</th>;
                    })}
                </tr>
              </thead>
              <tbody>
                {response.length > 0 &&
                  response.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.branch}</td>
                        <td>{row.year}</td>
                        <td>{row.mobile}</td>
                        <td>
                          <Button>Add</Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          ) : (
            <h1>No Members</h1>
          )}
        </Col>
      </Row>
    </>
  );
}
