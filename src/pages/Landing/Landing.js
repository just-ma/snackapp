import React, { Component } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./Landing.scss";

const cards = [
  {
    id: 1,
    rating: 3,
    title: "Tate's Bake Shop Cookies",
    image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },{
    id: 2,
    rating: 3.5,
    title: "Tate's Bake Shop Cookies",
    image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },{
    id: 3,
    rating: 4,
    title: "Tate's Bake Shop Cookies",
    image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },{
    id: 4,
    rating: 2.2,
    title: "Tate's Bake Shop Cookies",
    image: "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  }
];

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <CardContainer cards={cards} />
      </div>
    );
  }
}

export default Landing;
