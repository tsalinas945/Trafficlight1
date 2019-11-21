//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

import "../styles/index.scss";

import { Home } from "./component/home";
// import { TrafficLight } from "./component/trafficlight.js";

ReactDOM.render(<Home />, document.querySelector("#app"));
