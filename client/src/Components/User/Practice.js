import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import apis from "../../api/api";
import LoadingComponent from "../LoadingComponent";

export default function Pratice({ setAuth }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    apis
      .getQuestions()
      .then((res) => {
        console.log(res.data);
        setData(res.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setAuth(null);
          console.log(err.response.data);
        }
      });
  }, []);
  if (loading) return <LoadingComponent />;
  else
    return (
      <div>
        <Row>
          <Col md={12} className="notice">
            <ul>
              {data.length > 0 &&
                data.map((notice, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={`/compiler/${notice._id}`}
                        target="_blank"
                        contenteditable
                      >
                        <h2>{notice.title}</h2>
                        <p>{notice.description}</p>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </Col>
        </Row>
      </div>
    );
}
