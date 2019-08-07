import React, { Component } from "react";
import "./Request.scss";
import firebase from "../../firebase.js";

export default class NewRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleCreate = () => {
    const value = document.getElementById("newRequest").value;
    if (!value) return;
    document.getElementById("newRequest").value = "";
    let newReq = this;
    firebase
      .database()
      .ref("requests")
      .once("value")
      .then(function(snapshot) {
        newReq.setState({ count: snapshot.val().length });
      })
      .then(() => {
        firebase
          .database()
          .ref(`requests/${this.state.count}`)
          .set({
            id: this.state.count,
            title: value,
            upvotes: 1,
            downvotes: 0,
            date: Date.now()
          });
        localStorage.setItem("vote_" + this.state.count, "up");
        this.props.updateList();
      });
  };

  render() {
    return (
      <div className="request -new">
        <input
          id="newRequest"
          placeholder="Enter snack name"
          type="text"
          className="request__title"
        />
        <hr className="request__underline" />
        <div className="request__right">
          <div className="request__add" onClick={this.handleCreate} />
        </div>
      </div>
    );
  }
}
