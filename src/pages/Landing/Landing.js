import React, { Component } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./Landing.scss";
import firebase from "../../firebase.js";
import { Link } from "react-router-dom";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      sort: localStorage.getItem("landSort") || "popularity",
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
        case "toprated":
          return b.rating - a.rating;
        case "lowrated":
          return a.rating - b.rating;
        default:
          return 1;
      }
    });
  };

  setSort = sort => {
    this.setState({ sort: sort });
    localStorage.setItem("landSort", sort);
  }

  render() {
    return (
      <div className="landing">
        <div className="background" />
        <div className="landing__header">
          <div className="landing__title">Rate your favorite snacks...</div>
          <Link className="landing__link" to="/requests">Request snacks</Link>
          <div className="landing__sort">
            <div>Sort by:</div>
            <span
              style={{
                fontWeight: this.state.sort === "popularity" ? 600 : null
              }}
              onClick={() => this.setSort("popularity")}
            >
              Popularity
            </span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
            <span
              style={{
                fontWeight: this.state.sort === "toprated" ? 600 : null
              }}
              onClick={() => this.setSort("toprated")}
            >
              Top Rated
            </span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
            <span
              style={{
                fontWeight: this.state.sort === "lowrated" ? 600 : null
              }}
              onClick={() => this.setSort("lowrated")}
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
