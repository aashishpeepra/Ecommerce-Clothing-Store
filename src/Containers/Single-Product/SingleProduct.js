import React, { Component } from "react";
import Gallery from "../../Components/ImageGallery/ImageGallery";
import SizeSelector from "./SizeSelection/SizeSelection";
import Description from "./ProductDescription/ProductDescription";
import "./SingleProduct.css";

export default class SingleProduct extends Component {
  state = {};
  render() {
    return (
      <div style={{marginTop:"90px"}}>
        <React.Fragment>
        <Gallery />
        <SizeSelector />
        <Description />
      </React.Fragment>
      </div>
      
    );
  }
}
