import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import apis from "../../api/api";
import TableComponent from "../TableComponent";
export default function Members() {
  const [response, setResponse] = useState([]);
  const headers = ["#", " Name", "Email", "Branch", "Year", "Phone"];
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
            <TableComponent headings={headers} rows={response} />
          ) : (
            <h1>No Members</h1>
          )}
        </Col>
      </Row>
    </>
  );
}
