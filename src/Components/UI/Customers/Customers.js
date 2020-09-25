import React from "react";
import Customer from "./Customer/Customer.js";
import "./Customers.css";
import first from "../../../assets/Customers/kids-top.jpeg";
import second from "../../../assets/Customers/kids-cloth.jpeg";
import third from "../../../assets/Customers/kids-full-shirt.jpeg";
import fourth from "../../../assets/Customers/kids-shirt.jpeg";

export default class Customers extends React.Component {
  state = {
    data: [
      {
        image: first,
        name: "Rabia Noreen",
        message:
          "Received my parcel and satisfying quality. Want to buy more dresses.",
      },
      {
        image: second,
        name: "Rahila",
        message:
          "Got my parcel. Sari and shirts bhut aache hai. My 2nd order and worth it.",
      },
      {
        image: third,
        name: "Zainab",
        message: "Just got my parcel amazing fabric",
      },
      {
        image: fourth,
        name: "Nazish",
        message: "Aaj mera order mil gya mah shah allah zabardust.",
      },
    ],
    val: 0,
  };
  componentDidMount() {
    setInterval(() => {
      if (this.state.val === 3) this.setState({ val: 0 });
      else this.setState({ val: this.state.val + 1 });
    }, 2000);
  }
  render() {
    return (
      <div>
        <section id="reviews">
          <h3 style={{color:"#e5978e"}}>Our Happy customers</h3>
          <div >
            <Customer image={this.state.data[this.state.val].image} />
          </div>
        </section>
        <section id="happy-customers">
          <div className="reviews-wrapper reviews">
            <div className="review">
              <div className="review-left">
                <div className="review-img-holder">
                  <img
                    src="https://cdn.dribbble.com/users/1054100/screenshots/2859350/___-1-01_1x.jpg"
                    alt="Avator"
                  />
                </div>
              </div>
              <div className="review-right">
                <span id="review-head">
                  {this.state.data[this.state.val].name}
                </span>
                <div className="review-right-content">
                  <p>{this.state.data[this.state.val].message}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
