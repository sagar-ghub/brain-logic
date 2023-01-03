import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/logo.png";
import User from "../../assets/Group.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faWandMagicSparkles,
  faHippo,
  faUserSecret,
  faClover,
  faMagicWandSparkles,
  faPowerOff,
  faPeopleRobbery,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function CollapsibleExample({ user, logout }) {
  const [beat, setBeat] = useState(true);
  setTimeout(() => {
    setBeat(false);
  }, 1000);
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
        <Navbar.Brand href="/dashboard" style={{ color: "white" }}>
          Brain Logic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className="ms-auto">
            {user ? (
              <>
                {user.role === "user" ? (
                  <>
                    <Nav.Link as={Link} to="/event" href="#deets">
                      <FontAwesomeIcon
                        icon={faMagicWandSparkles}
                        pull="right"
                        bounce={beat}
                        size="xl"
                      />
                      Events
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/compiler"
                      eventKey={2}
                      href="#memes"
                    >
                      Practice
                      <FontAwesomeIcon
                        icon={faRocket}
                        pull="right"
                        bounce={beat}
                        size="xl"
                      />
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/leaderboard"
                      eventKey={2}
                      href="#memes"
                    >
                      LeaderBoard
                      <FontAwesomeIcon
                        icon={faPeopleRobbery}
                        pull="right"
                        bounce={beat}
                        size="xl"
                      />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/notice" eventKey={2} href="#memes">
                      Notice
                      <FontAwesomeIcon
                        icon={faNoteSticky}
                        bounce={beat}
                        pull="right"
                        size="xl"
                      />
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      to="/profile"
                      className="d-flex align-items-center"
                      eventKey={2}
                      href="#memes"
                    >
                      Profile
                      <FontAwesomeIcon
                        icon={faUserSecret}
                        pull="right"
                        bounce={beat}
                        size="xl"
                      />
                      {/* <img
                        src={`https://avatars.dicebear.com/4.6/api/bottts/${user.name}.svg`}
                        alt="profile image"
                        height="30px"
                        style={{ marginLeft: "3px" }}
                      /> */}
                    </Nav.Link>
                    <Nav.Link onClick={logout} eventKey={2} href="#memes">
                      Logout
                      <FontAwesomeIcon
                        icon={faPowerOff}
                        pull="right"
                        bounce={beat}
                        size="xl"
                      />
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/members" href="#deets">
                      Members
                    </Nav.Link>
                    <Nav.Link as={Link} to="/events" eventKey={2} href="#memes">
                      Events
                    </Nav.Link>
                    <Nav.Link as={Link} to="/notice" eventKey={2} href="#memes">
                      Notice
                    </Nav.Link>
                    <Nav.Link as={Link} to="/report" eventKey={2} href="#memes">
                      Report
                    </Nav.Link>
                  </>
                )}
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login" href="#deets">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register" eventKey={2} href="#memes">
                  Register
                </Nav.Link>
              </>
            )}
            <img
              src={User}
              alt="logo"
              style={{ width: "30px" }}
              onClick={logout}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
