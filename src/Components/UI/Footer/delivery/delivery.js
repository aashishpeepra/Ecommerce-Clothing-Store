import React from "react";
import "./delivery.css";

class Delivery extends React.Component {
  render() {
    return (
      <div className="delivery__holder">
        <h2 className="delivery__heading">Delivery Information</h2>
        <div className="delivery__para--holder">
          <h4>Delivery Options</h4>
          <h5>Option 1- Cash on Delivery</h5>
          <p>
          For cash on delivery option we charge only 200 Rs. Free delivery if your order is over 2,500. Free delivery is only on cash on delivery option.
          </p>
          <h5>Option 2. Advance Payment options.</h5>
          <p>We charge 350 Rs for all Advance payment options</p>
          <ul>
            <li>Leopard courier services (LCS)</li>
            <li>Easy Paisa
Mobile Account no 0092318-2003004 Farhan Ahmed</li>
            <li>Jazz cash
Mobile Account no 00923219005837</li>
            <li>Meezan Bank         Farhan Ahmed
A/c  0708. 0103064376</li>
          </ul>
          
        </div>
      </div>
    );
  }
}

export default Delivery;