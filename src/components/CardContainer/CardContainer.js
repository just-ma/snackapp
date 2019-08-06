import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardContainer.scss";
import firebase from "../../firebase.js";

export default class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidMount = () => {
    let cardContainer = this;
    firebase.database().ref('items').once('value').then(function(snapshot) {
      cardContainer.setState({
        cards: snapshot.val()
      })
    });
  }
  render() {
    return (
      <div className="cardContainer">
        {this.state.cards.map(e => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    );
  }
}
