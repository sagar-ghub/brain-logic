import React from "react";
import { Col, Row } from "react-bootstrap";
import ScoreChart from "../Charts/ScoreChart";
export default function LeaderBoard() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [5, 6, 2, 8, 6, 4, 7],
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [5, 8, 9, 3, 5, 2, 8],
        borderColor: "blue",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Row>
        <Col md={5}>
          <br />
          <h1>Your score</h1>

          <h3>20</h3>
          <ScoreChart chartData={data} />
        </Col>
        <Col md={6} className="leaderBoard">
          <div className="leaderboard">
            <h1>
              <svg class="ico-cup">{/* <use xlink:href="#cup"></use> */}</svg>
              Most active Players
            </h1>
            <ol>
              <li>
                <mark>Jerry Wood</mark>
                <small>315</small>
              </li>
              <li>
                <mark>Brandon Barnes</mark>
                <small>301</small>
              </li>
              <li>
                <mark>Raymond Knight</mark>
                <small>292</small>
              </li>
              <li>
                <mark>Trevor McCormick</mark>
                <small>245</small>
              </li>
              <li>
                <mark>Andrew Fox</mark>
                <small>203</small>
              </li>
              {/* <li>
                <mark>Andrew Fox</mark>
                <small>203</small>
              </li>
              <li>
                <mark>Andrew Fox</mark>
                <small>203</small>
              </li> */}
            </ol>
          </div>
        </Col>
      </Row>
    </div>
  );
}
