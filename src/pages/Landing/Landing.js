import React, { Component } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./Landing.scss";

const cards = [
  {
    id: 1,
    rating: 3,
    count: 12,
    title: "Tate's Bake Shop Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 2,
    rating: 3.5,
    count: 2,
    title: "Tate's Mini Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 3,
    rating: 4,
    count: 129,
    title: "Bake Shop Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 4,
    rating: 2.2,
    count: 4,
    title: "Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 5,
    rating: 3.5,
    count: 2,
    title: "Tate's Mini Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 6,
    rating: 4,
    count: 129,
    title: "Bake Shop Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 7,
    rating: 2.2,
    count: 4,
    title: "Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 8,
    rating: 3.5,
    count: 2,
    title: "Tate's Mini Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 9,
    rating: 4,
    count: 129,
    title: "Bake Shop Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  },
  {
    id: 10,
    rating: 2.2,
    count: 4,
    title: "Cookies",
    image:
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
  }
];

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="background" />
        <div className="header">Vote for your favorite snacks...</div>
        <CardContainer cards={cards} />
      </div>
    );
  }
}

export default Landing;
