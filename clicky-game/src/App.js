import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Board from "./components/Board";
class App extends Component {
  state = {
    images: [
      "cl.jpg",
      "ss.jpg",
      "bb.jpg",
      "tgb.jpg",
      "jl.jpg",
      "js.jpg",
      "tl.jpg",
      "ds.jpg",
      "bt.jpg",
      "dt.jpg",
      "astark.jpg",
      "hound.jpg"
    ],
    clickedImages: [],
    currScore: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };
  componentDidMount() {
    //Shuffle Images
    this.setState({
      images: this.shuffle(this.state.images)
    });
  }

  handleClick = event => {
    const src = event.target.attributes.getNamedItem("data-value").value;
    const clickedImages = this.state.clickedImages;
    console.log(clickedImages);
    console.log(src);
    console.log(clickedImages.indexOf(src));
    if (clickedImages.indexOf(src) >= 0) {
      //Game Over
      const newTop = this.state.topScore < this.state.currScore;
      if (newTop) {
        //Set new top score, reset currScore, shuffle
        this.setState({
          topScore: this.state.currScore,
          currScore: 0,
          images: this.shuffle(this.state.images),
          message: "You blew it! Start again.",
          clickedImages: []
        });
      } else {
        //reset currScore to 0, shuffle
        this.setState({
          currScore: 0,
          images: this.shuffle(this.state.images),
          message: "You blew it! Start again.",
          clickedImages: []
        });
      }
    } else {
      //Game Continues: Add img to array, increase score
      clickedImages.push(src);
      let currScore = this.state.currScore;
      currScore++;
      if (currScore >= this.state.topScore) {
        this.setState({
          images: this.shuffle(this.state.images),
          clickedImages: clickedImages,
          currScore: currScore,
          topScore: currScore,
          message: "Good!  Keep going!"
        });
      } else {
        this.setState({
          images: this.shuffle(this.state.images),
          clickedImages: clickedImages,
          currScore: currScore,
          message: "Good!  Keep going!"
        });
      }
    }
  };
  shuffle = array => {
    // console.log(array);
    for (let i = array.length - 1; i >= 0; i--) {
      // const j = Math.floor(Math.random() * (i + 1));
      const j = Math.floor(Math.random() * i);
      // console.log(j);
      [array[i], array[j]] = [array[j], array[i]];
      console.log(i + " | " + array[i] + " | " + j + " | " + array[j]);
    }
    // console.log(array);
    console.log(array.length);
    return array;
  };

  render() {
    return (
      <div>
        <NavBar
          currScore={this.state.currScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />
        <Board images={this.state.images} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
