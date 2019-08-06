import React, { Component } from "react";
import "./Card.scss";
import Rating from "react-rating";
import firebase from "../../firebase.js";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
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
        //TODO update my rating
      }
    } else {
      //TODO add my rating
      firebase
        .database()
        .ref("items/" + this.props.id + "/rating")
        .set(rating);
    }
  };

  render() {
    const props = this.props;
    return (
      <div id={props.id} className="card">
        <div className="card__main">
          <img className="card__picture" src={props.image} />
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
