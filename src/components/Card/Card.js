import React, { Component } from "react";
import "./Card.scss";
import Rating from "react-rating";
import firebase from "../../firebase.js"

export default class Card extends Component {
  handleRating = rating => {
    console.log(`item ${this.props.id} got a rating of ${rating}`);
    //console.log(this.props.id);
    this.updateRating(rating);
    console.log("rating"+ this.props.rating);
    firebase.database().ref('items/'+this.props.id+'/rating').set(rating);
  };
  updateRating(rating) {
    console.log("count: "+this.props.count)
    console.log( (this.props.rating * this.props.count + rating)/(this.props.count+1));
    //this.props.count++;
    this.setState({
      count: this.props.count+1
    });
    //this.props.count.set(this.props.count++);
  }
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
