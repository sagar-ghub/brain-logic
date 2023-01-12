import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import apis from "../../api/api";
import ScoreChart from "../Charts/ScoreChart";
import moment from "moment";
export default function LeaderBoard({ user }) {
  const [score, setScore] = useState(new Map());
  const [points, setPoints] = useState("---");
  const [dataset, setDataSet] = useState();
  const [labels, setLabels] = useState();
  const [data, setData] = useState(null);
  useEffect(() => {
    apis.getScore(user.user_id).then((res) => {
      // console.log(res.data.data);
      let temp = res?.data?.data[0]?.score;

      // console.log(temp);/
      setPoints(temp.length * 5);
      let tempScore = new Map();
      temp.map((s) => {
        let dt = moment(s.date).format("DD/MM/YYYY");

        let n = tempScore.get(dt);
        // console.log(n);
        if (n) tempScore.set(dt, n + 1);
        else tempScore.set(dt, 1);
      });
      setScore(tempScore);
      let tempLabel = ["Joined"];
      let tempData = [0];
      let array;
      for (array of tempScore) {
        tempLabel.push(array[0]);
        tempData.push(array[1]);
      }

      let data = {
        labels: [...tempLabel],
        datasets: [
          {
            label: "Score",
            data: [...tempData],
            borderColor: "blue",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
          // {
          //   label: "Dataset 2",
          //   data: [5, 8, 9, 3, 5, 2, 8],
          //   borderColor: "blue",
          //   backgroundColor: "rgba(53, 162, 235, 0.5)",
          // },
        ],
      };
      setData(data);

      setLabels(tempLabel);
      setDataSet(tempData);
      console.log(data);
    });
  }, []);
  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  const data1 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [5, 6, 2, 8, 6, 4, 7],
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      // {
      //   label: "Dataset 2",
      //   data: [5, 8, 9, 3, 5, 2, 8],
      //   borderColor: "blue",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      // },
    ],
  };

  return (
    <div>
      <Row>
        <Col md={5}>
          <br />
          <h1>Your score</h1>

          <h3>{points}</h3>
          {data && <ScoreChart chartData={data} />}
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
