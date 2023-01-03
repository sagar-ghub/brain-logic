import React from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
export default function Profile({ user }) {
  console.log(user);
  const date = moment(user.birthday).format("Do MMM YYYY");
  useEffect(() => {
    const clc = document.querySelector(".cancel");
    const arr = document.querySelector(".arr_container");
    const left_container = document.querySelector(".left_container");

    arr.addEventListener("click", () => {
      arr.classList.add("active_arr");
      if (left_container.classList.contains("off")) {
        left_container.classList.remove("off");
        left_container.classList.add("active");
      }
    });

    clc.addEventListener("click", () => {
      arr.classList.remove("active_arr");
      if (left_container.classList.contains("active")) {
        left_container.classList.remove("off");
        left_container.classList.add("off");
      }
    });
  }, []);

  return (
    <Row>
      <Col md={12}>
        <div class="main center">
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
        </div>
      </Col>
    </Row>
  );
}
