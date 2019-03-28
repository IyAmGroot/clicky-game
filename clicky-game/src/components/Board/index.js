import React, { Component } from "react";
import Tile from "../Tile";
import "./style.css";

export default class Board extends Component {
  render() {
    return (
      <div className="container boardContainer">
        <div className="row">
          <div className="col-md-3">
            <Tile image={this.props.images[0]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[1]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[2]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[3]} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Tile image={this.props.images[4]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[5]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[6]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[7]} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Tile image={this.props.images[8]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[9]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[10]} />
          </div>
          <div className="col-md-3">
            <Tile image={this.props.images[11]} />
          </div>
        </div>
      </div>
    );
  }
}
