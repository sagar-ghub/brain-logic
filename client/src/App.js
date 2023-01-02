import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

import Home from "./Components/Home";
// import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Event from "./Components/Events";
import Login from "./Components/AuthPage/Login";
import Register from "./Components/AuthPage/Register";

import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import UserDashboard from "./Components/User/DashBoard/Dashboard";
import AdminDashboard from "./Components/Admin/Dashboard";
import Events from "./Components/Admin/Events";
import Members from "./Components/Admin/Members";
import LeaderBoard from "./Components/User/LeaderBoard";
import SpinnerComponent from "./Components/SpinnerComponent";
import pacman from "./assets/pacman.gif";
import Notice from "./Components/User/Notice";
import Landing from "./CodeCompiler/components/Landing";
import Profile from "./Components/User/Profile";
function App() {
  const [isLoading, setLoading] = useState(true);
  const [sidebarLink, setSidebarLink] = useState("Home");
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const setAuth = (data) => {
    if (data) {
      console.log("inside", data);
      setUser(data);
      localStorage.setItem("token", data.token);
    } else {
      setUser(null);
      console.log("outside", data);
      localStorage.removeItem("token");
    }
  };
  const logout = () => {
    setAuth(null);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      var decoded = jwt_decode(token);
      if (user == null) setUser(decoded);
    }
    setLoading(false);
  }, [user]);
  if (isLoading) return <img src={pacman} alt="Loading..." />;
  // return <SpinnerComponent />;
  else
    return (
      <div className="App">
        <Router>
          <Row>
            <Col md={12}>
              {/* <Sidebar
              sidebarLink={sidebarLink}
              setSidebarLink={setSidebarLink}
            /> */}
              <Navbar user={user} logout={logout} />
            </Col>
            <Col md={12}>
              <div className="app_container">
                <Switch>
                  {user ? (
                    <>
                      <Route path="/" exact>
                        <Redirect to="/dashboard" />
                      </Route>

                      <Route path="/dashboard" exact>
                        {user && user.role == "admin" ? (
                          <AdminDashboard />
                        ) : (
                          <UserDashboard />
                        )}
                      </Route>
                      {user && user.role == "admin" ? (
                        <>
                          <Route path="/members" exact>
                            <Members setLoading={setLoading} />
                          </Route>
                          <Route path="/events" exact>
                            <Events setLoading={setLoading} />
                          </Route>
                        </>
                      ) : (
                        <>
                          <Route path="/event" exact>
                            <Event setLoading={setLoading} />
                          </Route>
                          <Route path="/leaderboard" exact>
                            <LeaderBoard setLoading={setLoading} />
                          </Route>
                          <Route path="/profile" exact>
                            <Profile user={user} setLoading={setLoading} />
                          </Route>
                          <Route path="/notice" exact>
                            <Notice setLoading={setLoading} />
                          </Route>
                          <Route path="/compiler" exact>
                            <Landing setLoading={setLoading} />
                          </Route>
                        </>
                      )}
                      {/* <Route path="*" exact>
                        <Redirect to="/dashboard" />
                      </Route> */}
                    </>
                  ) : (
                    <>
                      <Route path="/" exact>
                        <Redirect to="/login" />
                      </Route>

                      <Route path="/login" exact>
                        <Login
                          user={user}
                          setUser={setUser}
                          setAuth={setAuth}
                        />
                      </Route>
                      <Route path="/register" exact>
                        <Register />
                      </Route>
                    </>
                  )}
                </Switch>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="footer">
              <p>Trident Academy of Technology</p>
            </Col>
          </Row>
        </Router>
      </div>
    );
}

export default App;
