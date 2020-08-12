import React from "react";
import "./delivery.css";

class Delivery extends React.Component {
  render() {
    return (
      <div className="delivery__holder">
        <h2 className="delivery__heading">Delivery Information</h2>
        <div className="delivery__para--holder">
          <p>Cash on Delivery</p>
          <p>
            Delivery timing 3-5 working days for all Major cities of Pakistan
          </p>
          <p>3-7 days for Remote areas of Pakistan</p>
          <p>
            Delivery couriers: leopard courier Pakistan and Call courier
            Pakistan, TCS Pakistan
          </p>
          <p>Currently we are just delivering with in Pakistan</p>
          <p>
            Delivery charges depends upon order's items weight, Starting from
            Rs.199
          </p>
        </div>
      </div>
    );
  }
}

export default Delivery;