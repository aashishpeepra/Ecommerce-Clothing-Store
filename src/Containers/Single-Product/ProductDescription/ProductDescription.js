import React from "react";
import "./ProductDescription.css";

class Description extends React.Component {
  render() {
    return (
      <div className="ProductDescription">
        <h1 className="ProductDescription__Heading">Product Description</h1>
        <p className="ProductDescription__Para">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
          suscipit est quis, quae obcaecati quisquam minima inventore a tempore
          fugiat magni illum quia totam praesentium, omnis sequi commodi eius
          cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Quasi suscipit est quis, quae obcaecati quisquam minima inventore a
          tempore fugiat magni illum quia totam praesentium, omnis sequi commodi
          eius cupiditate.
        </p>
        <div className="ProductDescription__Table">
          <div className="ProductDescription__Fixed">
            <div>Material</div>
            <div>Mfg. Date</div>
            <div>Gender</div>
          </div>
          <div className="ProductDescription__Dynamic">
              <div>Cotton</div>
              <div>12-05-2020</div>
              <div>F</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
