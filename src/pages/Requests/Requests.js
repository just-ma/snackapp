import React, { Component } from "react";
import "./Requests.scss";
import firebase from "../../firebase.js";
import { Link } from "react-router-dom";
import RequestContainer from "../../components/Request/RequestContainer";

class Requests extends Component {
  constructor() {
    super();
    this.state = {
      sort: localStorage.getItem("reqSort") || "top",
      requests: []
    };
  }

  componentDidMount = () => {
    this.updateList();
  };

  updateList = () => {
    let landing = this;
    firebase
      .database()
      .ref("requests")
      .once("value")
      .then(function(snapshot) {
        landing.setState({
          requests: snapshot.val()
        });
      });
  };

  sortArr = arr => {
    return arr.sort((a, b) => {
      switch (this.state.sort) {
        case "new":
          return b.date - a.date;
        case "toprated":
          return b.upvotes - a.upvotes;
        default:
          return 1;
      }
    });
  };

  setSort = sort => {
    this.setState({ sort: sort });
    localStorage.setItem("reqSort", sort);
  };

  render() {
    return (
      <div className="requests">
        <div className="background" />
        <div className="requests__header">
          <div className="requests__title">Request your favorite snacks...</div>
          <Link className="landing__link" to="/">
            Rate snacks
          </Link>
          <div className="requests__sort">
            <div>Sort by:</div>
            <span
              style={{
                fontWeight: this.state.sort === "new" ? 600 : null
              }}
              onClick={() => this.setSort("new")}
            >
              New
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
          </div>
        </div>
        <RequestContainer
          requests={this.sortArr(this.state.requests)}
          updateList={this.updateList}
        />
      </div>
    );
  }
}

export default Requests;
