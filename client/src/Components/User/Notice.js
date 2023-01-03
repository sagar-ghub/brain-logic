import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import apis from "../../api/api";
import LoadingComponent from "../LoadingComponent";

export default function Notice() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    apis.getNotices().then((res) => {
      console.log(res.data);
      setData(res.data?.data);
      setLoading(false);
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
                      <a href="#" contenteditable>
                        <h2>{notice.title}</h2>
                        <p>{notice.description}</p>
                      </a>
                    </li>
                  );
                })}
              <li>
                <a href="#" contenteditable>
                  <h2>Title #2</h2>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                  </p>
                </a>
              </li>
              <li>
                <a href="#" contenteditable>
                  <h2>Title #3</h2>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                  </p>
                </a>
              </li>
              <li>
                <a href="#" contenteditable>
                  <h2>Title #4</h2>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                  </p>
                </a>
              </li>
              <li>
                <a href="#" contenteditable>
                  <h2>Title #5</h2>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                  </p>
                </a>
              </li>
              <li>
                <a href="#" contenteditable>
                  <h2>Title #6</h2>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                  </p>
                </a>
              </li>
              <li>
                <a href="#" contenteditable>
                  <h2>Title #7</h2>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                  </p>
                </a>
              </li>
              <li>
                <a href="#" contenteditable>
                  <h2>Title #8</h2>
                  <p>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum
                  </p>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    );
}
