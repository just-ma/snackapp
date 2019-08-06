import React, { Component } from "react";
import "./Card.scss";
import Rating from "react-rating";
import firebase from "../../firebase.js";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id - 1,
      name: props.name,
      rating: props.rating,
      myRating: 0,
      count: props.count,
      voted: false
    };
  }

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
      <div id={props.id} className="card">
        <div className="card__main">
          <img className="card__picture" alt={props.title} src={props.image} />
          <div className="card__fade" />
          <div className="card__info">
            <span className="card__title">{props.title}</span>
            <Rating
              className="rating"
              initialRating={props.rating}
              readonly
              emptySymbol={<div className="rating__star -empty" />}
              fullSymbol={<div className="rating__star -full" />}
            />
            <span>{`(${props.count})`}</span>
          </div>
        </div>
        <div className="card__rating">
          <div className="userRating">
            <Rating
              initialRating={this.state.myRating}
              onChange={this.handleRating}
              emptySymbol={<div className="userRating__star -empty" />}
              fullSymbol={<div className="userRating__star -full" />}
            />
          </div>
        </div>
      </div>
    );
  }
}
