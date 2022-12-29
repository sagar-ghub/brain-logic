import "./App.css";
import {
  BrowserRouter as Router,
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

import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [sidebarLink, setSidebarLink] = useState("Home");
  return (
    <div className="App">
      <Router>
        <Row>
          <Col md={12}>
            {/* <Sidebar
              sidebarLink={sidebarLink}
              setSidebarLink={setSidebarLink}
            /> */}
            <Navbar />
          </Col>
          <Col md={9}>
            <div className="app_container">
              <Switch>
                <Route path="/" exact>
                  <Home setLoading={setLoading} />
                </Route>
                <Route path="/event" exact>
                  <Event setLoading={setLoading} />
                </Route>
                {/* <Route path="/search" exact>
                  <SearchBooks isLoading={isLoading} setLoading={setLoading} />
                </Route> */}
                <Route path="/login" exact>
                  <Login />
                </Route>
                <Route path="/register" exact>
                  <Register />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Router>
    </div>
  );
}

export default App;
