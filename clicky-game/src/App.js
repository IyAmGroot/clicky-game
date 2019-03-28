import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Board from "./components/Board";
class App extends Component {
  state = {
    images: [
      "/img/characters/cl.jpg",
      "/img/characters/ss.jpg",
      "/img/characters/bb.jpg",
      "/img/characters/tgb.jpg",
      "/img/characters/jl.jpg",
      "/img/characters/js.jpg",
      "/img/characters/tl.jpg",
      "/img/characters/ds.jpg",
      "/img/characters/bt.jpg",
      "/img/characters/dt.jpg",
      "/img/characters/astark.jpg",
      "/img/characters/hound.jpg"
    ],
    currScore: 5,
    topScore: 10,
    lastClicked: 20
  };
  componentDidMount() {
    //Shuffle Images
    this.setState({
      images: this.shuffle(this.state.images)
    });
  }

  handleClick = index => {
    const matches = this.state.lastClicked === index;
    if (matches) {
      //Game Over
      const newTop = this.state.topScore < this.state.currScore;
      if (newTop) {
        //Set new top score
        this.setState({
          topScore: this.state.currScore,
          currScore: 0,
          lastClicked: 20,
          images: this.shuffle(this.state.images)
        });
        //Add logic to update message
      }
    } else {
      let score = this.state.currScore;
      score++;
      this.setState({ currScore: score, lastClicked: index });
      //Add logic to update message
    }
  };
  shuffle = array => {
    console.log(array);
    for (let i = array.length; i > 0; i--) {
      // const j = Math.floor(Math.random() * (i + 1));
      const j = Math.floor(Math.random() * i);
      [array[i], array[j]] = [array[j], array[i]];
      console.log(j + " | " + i);
    }
    console.log(array);
    return array;
  };

  render() {
    return (
      <div>
        <NavBar
          currScore={this.state.currScore}
          topScore={this.state.topScore}
        />
        <Header />
        <Board images={this.state.images} />
      </div>
    );
  }
}

export default App;
