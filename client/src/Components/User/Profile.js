import React, { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import apis from "../../api/api";
export default function Profile({ user }) {
  console.log(user);
  const date = moment(user.birthday).format("Do MMM YYYY");
  const [score, setScore] = useState("---");
  useEffect(() => {
    // const clc = document.querySelector(".cancel");
    // const arr = document.querySelector(".arr_container");
    // const left_container = document.querySelector(".left_container");
    // arr.addEventListener("click", () => {
    //   arr.classList.add("active_arr");
    //   if (left_container.classList.contains("off")) {
    //     left_container.classList.remove("off");
    //     left_container.classList.add("active");
    //   }
    // });
    // clc.addEventListener("click", () => {
    //   arr.classList.remove("active_arr");
    //   if (left_container.classList.contains("active")) {
    //     left_container.classList.remove("off");
    //     left_container.classList.add("off");
    //   }
    // });

    apis.getScore(user.user_id).then((res) => {
      console.log(res.data.data);
      let temp = res?.data?.data[0]?.score;

      // console.log(temp);/
      setScore(temp.length * 5);
    });
  }, []);

  return (
    <Row className="profile">
      <Col md={12}>
        {/* <div class="main center">
          <div class="box center">
            <img
              src={`https://avatars.dicebear.com/4.6/api/bottts/${user.name}.svg`}
              alt="profile image"
            />
            <div class="text">
              <p class="user_name">{user.name}</p>
              <p class="skill">{user.email}</p>
              <p>Birthday: {date}</p>
              <p>Mobile: {user.mobile}</p>
            </div>
            <div class="arr_container center">
              <i class="fas fa-level-up-alt fa-4px"></i>
            </div>
            <div class="left_container off">
              <p>Skills</p>
              <div class="skills">
                <div>JavaScript</div>
                <div>Java</div>
                <div>Python</div>
              </div>
              <br />
              <div className="text-center">
                {user.branch + " " + user.year + "BATCH"}
              </div>
              <div class="icons">
                <a href="#" target="_blank" class="fab fa-facebook"></a>
                <a href="#" target="_blank" class="fab fa-instagram"></a>
                <a href="#" target="_blank" class="fab fa-linkedin"></a>
                <a href="#" target="_blank" class="fab fa-github"></a>
              </div>
              <div class="cancel center">
                <i class="fas fa-times"></i>
              </div>
            </div>
          </div>
        </div> */}
        <div class="container mt-4 mb-4 p-3 d-flex justify-content-center">
          {" "}
          <div class="card p-4">
            {" "}
            <div class=" image d-flex flex-column justify-content-center align-items-center">
              {" "}
              <button class="btn btn-secondary">
                {" "}
                <img
                  src={`https://avatars.dicebear.com/4.6/api/bottts/${user.name}.svg`}
                  height="100"
                  width="100"
                />
              </button>{" "}
              <span class="name mt-3">{user.name}</span>{" "}
              <span class="idd">{user.email}</span>{" "}
              <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                {" "}
                <span class="idd1">{user.year + " " + user.branch}</span>{" "}
                <span>
                  <i class="fa fa-copy"></i>
                </span>{" "}
              </div>{" "}
              <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                {" "}
                <span class="number">
                  <span class="follow">Score</span> {score}
                </span>{" "}
              </div>{" "}
              <div class=" d-flex mt-2">
                {" "}
                <button class="btn1 btn-dark">Edit Profile</button>{" "}
              </div>{" "}
              {/* <div class="text mt-3">
                {" "}
                <span>
                  Eleanor Pena is a creator of minimalistic x bold graphics and
                  digital artwork.
                  <br />
                  <br /> Artist/ Creative Director by Day #NFT minting@ with FND
                  night.{" "}
                </span>{" "}
              </div>{" "} */}
              <div class=" px-2 rounded mt-4 date ">
                {" "}
                <span class="join">Joined May,2021</span>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </div>
      </Col>
    </Row>
  );
}
