import React, { Component } from "react";
import "./style.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid myNavBar">
        <div className="row text-center">
          <div className="col-md-4">
            <h1>GoT Clicky Game</h1>
          </div>
          <div className="col-md-4">
            <h1>Click someone!</h1>
          </div>
          <div className="col-md-4">
            <h1>
              Score: <span id="currScore">{this.props.currScore}</span>
              <span id="divider">|</span>Top Score:
              <span id="topScore">{this.props.topScore}</span>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
