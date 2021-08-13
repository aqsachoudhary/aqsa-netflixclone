import logo from "./logo.svg";
import { Switch, Route, Router } from "react-router-dom";
import history from "./@history";
import "./App.css";

import Login from "../src/modules/auth/Login";
import SignUp from "./modules/auth/SignUp";
import HomePage from "./modules/HomePage";
import request from "./@Api/request";
import { useEffect } from "react";
// import axios from "axios";
import axios from "./myaxios";

function App() {
  // useEffect(() => {
  //   const callApi = async () => {
  //     console.log("geting data");

  //     const result = await axios.get(request.fetchNetflixOriginals);
  //     console.log("result", result);
  //   };
  //   callApi();
  // }, []);

  return (
    <div>
      {/* <HomePage /> */}

      <Router history={history}>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Switch>
          <Route exact path="/home" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
