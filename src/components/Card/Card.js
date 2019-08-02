import React, { Component } from "react";
import "./Card.scss";
import Rating from "react-rating";

export default class Card extends Component {
  handleRating = rating => {
    console.log(`item ${this.props.id} got a rating of ${rating}`);
  }
  render() {
    const props = this.props;
    return (
      <div id={props.id} className="card">
        <img className="card__picture" src={props.image} />
        <div className="card_info">
          <span className="card__title">{props.title}</span>
            <Rating
              initialRating={props.rating}
              readonly
              emptySymbol={<div className="rating__star -empty" />}
              fullSymbol={<div className="rating__star -full" />}
            />
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
