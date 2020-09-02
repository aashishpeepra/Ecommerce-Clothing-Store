import React from "react";
import "./Cart.css";
import CartEach from "../../Components/UI/CartEach/cartEach";
import Button from "../../Components/Navigation/Buttons/Button";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
class Cart extends React.Component {
  state = {
    total: 0,
  };
  calcSum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)
      sum+=arr[i].qty*arr[i].data.price;
    return sum;
  }
  moveToCheckout = () => {
    this.props.history.push("/payment");
    console.log("Pushed");
  };
  render() {
      console.log("===>",this.props.cart)
    return (
      <section className="Cart">
        <h1>My Shopping Bag</h1>
        <div className="Cart-Holder">
          <div>
            {this.props.cart.map((each, i) => (
              <CartEach
                image={each.data.images[0]}
                title={each.data.title}
                price={each.data.price}
                defSize={each.data.desc.sizes[0]}
                variants={each.data.desc.sizes}
                qty={each.qty}
                baby={each.data.desc.baby===undefined?1:each.data.desc.baby?0:1}
                index={i}
              />
            ))}
          </div>
          <div className="Cart-Price">
            <h5>Price Details</h5>
            <table>
              <tbody>
                <tr>
                  <th className="lefter">Bag value</th>
            <th>Rs.{this.calcSum(this.props.cart)}</th>
                </tr>
                <tr>
                  <th className="lefter">Shipping</th>
                  <th>Rs.{this.props.cart.length!==0?this.calcSum(this.props.cart)<2500?200:0:0}</th>
                </tr>
                <hr />
                <tr className="tota2">
                  <th
                    className="lefter"
                    style={{ fontWeight: "bold", fontSize: "100%" }}
                  >
                    Total
                  </th>
                  <th style={{ fontWeight: "bold", fontSize: "100%" }}>
                    Rs.{this.props.cart.length===0?0:this.calcSum(this.props.cart)+(this.calcSum(this.props.cart)<2500?200:0)}
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="Cart-btn-holder">
              <Button
                click={this.moveToCheckout.bind(this)}
                history={this.props.history}
                link="/payment"
                text={this.props.cart.length==0?"Add Something":"Place Order"}
                big={true}
                disable={!this.props.cart.length>0}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
