import React, { Component } from "react";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid myCF">
        <div className="row ">
          <div className="col-md-12">
            <div className="jumbotron myJbt">
              <div className="container">
                <h1 className="display-6">GoT Clicky Game</h1>
                <p className="lead">
                  Click an image without clicking more than once. How good are
                  you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
