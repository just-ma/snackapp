import React, { Component } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import "./Landing.scss";
import firebase from "../../firebase.js"

var db = firebase.database();
var ref = db.ref('items');
var sample_data = {
  "name": "Tate's Bake Shop Cookies",
  "type": "snack",
  "rating": 2,
  "count": 14,
  "image": "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"
}
console.log("reference[0]:"+db.ref('items'))
//ref.push(sample_data);
console.log("reference to json:" );
const cards = [
  {
    "id": 1,
    "rating": 3,
    "count": 12,
    "title": "Tate's Bake Shop Cookies",
    "image":
      "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b0def3e-306b-4cf8-9bf8-9eaab1a5a52d.jpg"

  },
  {
    "id": 1,
    "name": "Peach Tea Diet Snapple",
    "rating": 0,
    "count": 0,
    "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTXYCJnrV6UlGWWRK9D-uPmvM7vm4h3oRAvHX7U3J5BG8GqMPY6DKIzKdTq91Up3n65et3tvBc2W1KALF2TYDBhqnWXWU4x3f6tnxL28RAr&usqp=CAc"
  },
  {
    "id": 2,
    "name": "Lemon Tea Diet Snapple",
    "rating": 0,
    "count": 0,
    "image": "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_87fe6949-162d-45a2-a85f-01061630a342.JPG"
  },
  {
    "id": 3,
    "name": "Chocolate Pocky",
    "rating": 0,
    "count": 0,
    "image": ""
  },
  {
    "id": 4,
    "name": "Strawberry Pocky",
    "rating": 0,
    "count": 0,
    "image": ""
  }
]

/*[
  {
    id: 1,
    rating: 3.8,
    count: 12,
    title: "Pretzel Crisps - Buffalo",
    image: "https://i.ibb.co/M8KnR3L/pretzelbuffalo.jpg"
  },
  {
    id: 2,
    rating: 3.6,
    count: 19,
    title: "Pretzel Crisps - Original",
    image: "https://i.ibb.co/GVLt0t7/pretzelcrisps.jpg"
  },
  {
    id: 3,
    rating: 3,
    count: 4,
    title: "Paleo Puffs",
    image: "https://i.ibb.co/s5jpjhQ/paleopuffs.jpg"
  },
  {
    id: 4,
    rating: 2.2,
    count: 9,
    title: "Sweet Potato Chips",
    image: "https://i.ibb.co/5jZz1Rr/jacksonshonest.jpg"
  },
  {
    id: 5,
    rating: 3.8,
    count: 14,
    title: "Cheese Crackers",
    image: "https://i.ibb.co/3pBdB9H/latejuly.jpg"
  },
  {
    id: 6,
    rating: 3.6,
    count: 7,
    title: "Mojo Crunch",
    image: "https://i.ibb.co/VCQ96tc/mojocrunch.jpg"
  },
  {
    id: 7,
    rating: 4.4,
    count: 34,
    title: "Hippeas",
    image: "https://i.ibb.co/dGC3PCL/hippeas.jpg"
  },
  {
    id: 8,
    rating: 4,
    count: 11,
    title: "Popcorners - Jalapeno",
    image: "https://i.ibb.co/hHL1DJQ/popjalapeno.jpg"
  },
  {
    id: 9,
    rating: 4.2,
    count: 16,
    title: "Popcorners - Kettle Corn",
    image: "https://i.ibb.co/SBM7XnC/popkettle.jpg"
  },
  {
    id: 10,
    rating: 4.5,
    count: 20,
    title: "Popcorners - Cheddar",
    image: "https://i.ibb.co/4YCRsgp/popcheddar.jpg"
  },
  {
    id: 11,
    rating: 4.6,
    count: 21,
    title: "Tate's Tiny Cookies",
    image: "https://i.ibb.co/djByqxb/tatecookies.jpg"
  },
  {
    id: 12,
    rating: 3.9,
    count: 13,
    title: "Bacon Habanero Chips",
    image: "https://i.ibb.co/yV22r6G/baconhabanero.jpg"
  },
  {
    id: 13,
    rating: 3.3,
    count: 3,
    title: "Blue Chips",
    image: "https://i.ibb.co/g9bXfp5/bluechips.jpg"
  },
  {
    id: 14,
    rating: 3.8,
    count: 7,
    title: "Nacho Chips",
    image: "https://i.ibb.co/sjknfKy/nachochips.jpg"
  },
  {
    id: 15,
    rating: 3.6,
    count: 4,
    title: "Brussel Sprout Puffs",
    image: "https://i.ibb.co/8bLwHVn/brusselsprout.jpg"
  },
  {
    id: 16,
    rating: 4.2,
    count: 14,
    title: "Sweet Potato Chips",
    image: "https://i.ibb.co/0yzDL00/sweetpotato.jpg"
  },
  {
    id: 17,
    rating: 3.2,
    count: 6,
    title: "Mochi Rice Bites",
    image: "https://i.ibb.co/QY8t6Lc/mochiricebites.jpg"
  }
];*/

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "none",
      items: []
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
          <div className="landing__title">Rate your favorite snacks...</div>
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
