import React, { Component } from "react";
import Card from "../Card/Card";
import "./CardContainer.scss";

export default class CardContainer extends Component {
  render() {
    return (
      <div className="cardContainer">
        {this.props.cards.map(e => (
          <Card key={e.id} {...e} />
        ))}
      </div>
    );
  }
}
