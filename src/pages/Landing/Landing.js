import React, { Component } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./Landing.scss";
import firebase from "../../firebase.js";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      sort: "none",
      cards: []
    };
  }

  componentDidMount = () => {
    let landing = this;
    firebase
      .database()
      .ref("items")
      .once("value")
      .then(function(snapshot) {
        landing.setState({
          cards: snapshot.val()
        });
      });
  };

  sortArr = arr => {
    return arr.sort((a, b) => {
      switch (this.state.sort) {
        case "popularity":
          return b.count - a.count;
        case "highrating":
          return b.rating - a.rating;
        case "lowrating":
          return a.rating - b.rating;
        default:
          return 1;
      }
    });
  };

  render() {
    return (
      <div className="landing">
        <div className="background" />
        <div className="landing__header">
          <div className="landing__title">Rate your favorite snacks...</div>
          <div className="landing__sort">
            <div>Sort by:</div>
            <span
              style={{
                fontWeight: this.state.sort === "popularity" ? 600 : null
              }}
              onClick={() => this.setState({ sort: "popularity" })}
            >
              Popularity
            </span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
            <span
              style={{
                fontWeight: this.state.sort === "highrating" ? 600 : null
              }}
              onClick={() => this.setState({ sort: "highrating" })}
            >
              Highest Rated
            </span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
            <span
              style={{
                fontWeight: this.state.sort === "lowrating" ? 600 : null
              }}
              onClick={() => this.setState({ sort: "lowrating" })}
            >
              Lowest Rated
            </span>
          </div>
        </div>
        <CardContainer cards={this.sortArr(this.state.cards)}/>
      </div>
    );
  }
}

export default Landing;
