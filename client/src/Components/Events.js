import axios from "axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import LoadingComponent from "./LoadingComponent";

export default function Events() {
  const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_API_KEY}&q=jobs%20OR%20hackathon%20OR%20coding%20OR%20programming%20OR%20software%20OR%20blockchain&category=technology&language=en`;
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(url);
      setData(data.results);
      setLoading(false);
      console.log(data.results);
    };
    fetchData();
  }, []);
  const divBackgroundColor = [
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
  ];
  if (loading) return <LoadingComponent />;
  else
    return (
      <div>
        <h1>Events</h1>
        <Row>
          <Col md={2}></Col>
          <Col md={10}>
            <div className="events">
              {data.length > 0 &&
                data.map((event, index) => (
                  <div
                    className="event"
                    key={index}
                    style={{ backgroundColor: divBackgroundColor[index] }}
                  >
                    <h5 className="text-truncate">{event.title}</h5>
                    <p className="">{event.content}</p>
                    <div className="d-flex justify-content-end">
                      <a
                        href={event.link}
                        className="link text-end"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              {/* <div className="event">
                <h3>Ssd</h3>
                <p>asd</p>
                <a href="#" target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    );
}
