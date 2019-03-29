import React, { Component } from "react";
import Tile from "../Tile";
import "./style.css";

export default class Board extends Component {
  testClick = () => {
    console.log("test");
  };
  render() {
    return (
      <div className="container boardContainer">
        <div className="row myRow">
          <div className="col-md-3">
            <Tile
              image={this.props.images[0]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[1]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[2]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[3]}
              handleClick={this.props.handleClick}
            />
          </div>
        </div>
        <div className="row myRow">
          <div className="col-md-3">
            <Tile
              image={this.props.images[4]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[5]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[6]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[7]}
              handleClick={this.props.handleClick}
            />
          </div>
        </div>
        <div className="row myRow">
          <div className="col-md-3">
            <Tile
              image={this.props.images[8]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[9]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[10]}
              handleClick={this.props.handleClick}
            />
          </div>
          <div className="col-md-3">
            <Tile
              image={this.props.images[11]}
              handleClick={this.props.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
