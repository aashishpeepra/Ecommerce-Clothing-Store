import React, { Component } from "react";
import Products from "../../Components/UI/Products/Products";
import Customers from "../../Components/UI/Customers/Customers";
import Category from "../../Components/UI/Categorize/Categorize";

import "./Home.css";
export default class Home extends Component {
  render() {
    return (
      <main>
        {/* <h1>Home</h1> */}
        <h3>Trending Products</h3>
        <Products type="listed" />
        <Category />
        <h3>Top Picks For you</h3>
        <Products type="listed" />
        <Customers />
      </main>
    );
  }
}