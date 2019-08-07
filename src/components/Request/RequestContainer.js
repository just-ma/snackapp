import React, { Component } from "react";
import Request from "./Request";
import NewRequest from "./NewRequest";
import "./Request.scss";

export default class RequestContainer extends Component {
  render() {
    return (
      <div className="requestContainer">
        <NewRequest updateList={this.props.updateList} />
        {this.props.requests.map(e => (
          <Request key={e.id} {...e} />
        ))}
      </div>
    );
  }
}
