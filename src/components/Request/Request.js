import React, { Component } from "react";
import "./Request.scss";
import firebase from "../../firebase.js";

export default class Request extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: props.upvotes,
      downvotes: props.downvotes,
      vote: localStorage.getItem("vote_" + props.id) || ""
    };
  }

  handleVote = vote => {
    const translatedVote = vote ? "up" : "down";

    if (this.state.vote === translatedVote) return;

    const arrow = vote ? "upvotes" : "downvotes";
    const newVote = this.state[arrow] + 1;

    localStorage.setItem("vote_" + this.props.id, translatedVote);

    this.setState({
      vote: translatedVote,
      [arrow]: newVote
    });

    firebase
      .database()
      .ref("requests/" + this.props.id + "/" + arrow)
      .set(newVote);

    if (this.state.vote) {
      const arrow2 = vote ? "downvotes" : "upvotes";
      const newVote2 = this.state[arrow2] - 1;

      this.setState({
        [arrow2]: newVote2
      });

      firebase
        .database()
        .ref("requests/" + this.props.id + "/" + arrow2)
        .set(newVote2);
    }
  };

  handleRating = rating => {
    if (this.state.voted) {
      if (rating === this.state.myRating) return;
      else {
        let newRating =
          (this.state.rating * this.state.count -
            this.state.myRating +
            rating) /
          this.state.count;

        this.setState({
          rating: newRating,
          myRating: rating
        });

        localStorage.setItem("snack_" + this.state.id, rating);

        firebase
          .database()
          .ref("items/" + this.state.id + "/rating")
          .set(newRating);
      }
    } else {
      let newCount = this.state.count + 1;
      let newRating = (this.state.rating * (newCount - 1) + rating) / newCount;

      this.setState({
        count: newCount,
        rating: newRating,
        myRating: rating,
        voted: true
      });

      localStorage.setItem("snack_" + this.state.id, rating);

      firebase
        .database()
        .ref("items/" + this.state.id + "/rating")
        .set(newRating);
      firebase
        .database()
        .ref("items/" + this.state.id + "/count")
        .set(newCount);
    }
  };

  render() {
    const props = this.props;
    return (
      <div className="request" id={props.id}>
        <div className="request__title">{props.title}</div>
        <div
          className={
            "request__vote -upvote" +
            (this.state.vote === "up" ? " -hover" : "")
          }
          onClick={() => this.handleVote(true)}
        />
        <div
          className={
            "request__vote -downvote" +
            (this.state.vote === "down" ? " -hover" : "")
          }
          onClick={() => this.handleVote(false)}
        />
        <div className="request__num -upvote">{this.state.upvotes}</div>
        <div className="request__num -downvote">{this.state.downvotes}</div>
      </div>
    );
  }
}
