import React from "react";
import "./Categorize.css";

export default (props) => {
  return (
    <React.Fragment>
      <div className="Category__Heading">Categories</div>
      <div className="Categorize">
        <div className="Categorize__Card">
          <div className="Categorize__Card--Image">
            <img
              className="Categorize__Image"
              src="https://img.ltwebstatic.com/images2_pi/2018/09/21/15375094852194208966.webp"
              alt="Image1"
            />
          </div>
          <div className="Categorize__Card--Heading">BOYS</div>
        </div>
        <div className="Categorize__Card">
          <div className="Categorize__Card--Image">
            <img
              className="Categorize__Image"
              src="https://img.ltwebstatic.com/images3_pi/2020/03/04/15833061265aed4ce96d5a3639d175d1b61bab8637.webp"
              alt="Image2"
            />
          </div>
          <div className="Categorize__Card--Heading">GIRLS</div>
        </div>
        <div className="Categorize__Card">
          <div className="Categorize__Card--Image">
            <img
              className="Categorize__Image"
              src="https://img.ltwebstatic.com/images2_pi/2018/09/21/15375094852194208966.webp"
              alt="Image1"
            />
          </div>
          <div className="Categorize__Card--Heading">ACCESORIES</div>
        </div>
      </div>
    </React.Fragment>
  );
};
