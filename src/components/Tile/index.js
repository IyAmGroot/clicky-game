import React, { Component } from "react";
import "./style.css";

export default class Tile extends Component {
  render() {
    return (
      <div
        data-value={this.props.image}
        className="card"
        onClick={this.props.handleClick}
        style={{
          backgroundImage: `url(/img/characters/${this.props.image})`
        }}
      />
    );
  }
}
