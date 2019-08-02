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
  constructor(props) {
    super(props);
    this.state = {
      sort: "none"
    };
  }

  sortArr = arr => {
    return arr.sort((a, b) => {
      switch (this.state.sort) {
        case "popularity":
          return b.count - a.count;
        case "highrating":
          return b.rating - a.rating;
        case "lowrating":
          return a.rating - b.rating;
        default:
          return 1;
      }
    });
  };

  render() {
    return (
      <div className="landing">
        <div className="background" />
        <div className="landing__header">
          <div className="landing__title">Vote for your favorite snacks...</div>
          <div className="landing__sort">
            <div>Sort by:</div>
            <span
              style={{
                fontWeight: this.state.sort === "popularity" ? 600 : null
              }}
              onClick={() => this.setState({ sort: "popularity" })}
            >
              Popularity
            </span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
            <span
              style={{
                fontWeight: this.state.sort === "highrating" ? 600 : null
              }}
              onClick={() => this.setState({ sort: "highrating" })}
            >
              Highest Rated
            </span>
            <span>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;</span>
            <span
              style={{
                fontWeight: this.state.sort === "lowrating" ? 600 : null
              }}
              onClick={() => this.setState({ sort: "lowrating" })}
            >
              Lowest Rated
            </span>
          </div>
        </div>
        <CardContainer cards={this.sortArr(cards)} />
      </div>
    );
  }
}

export default Landing;
