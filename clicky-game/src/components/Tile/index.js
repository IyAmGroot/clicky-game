import React, { Component } from "react";
import "./style.css";

export default class Tile extends Component {
  render() {
    return (
      <div
        className="card"
        onClick={this.props.handleTileClick}
        style={{
          backgroundImage: `url(${this.props.image})`
        }}
      />
    );
  }
}
