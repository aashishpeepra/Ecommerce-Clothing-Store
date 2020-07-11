import React from "react";
import "./EachOrder.css";
import CartEach from "../../../Components/UI/CartEach/cartEach";
import Button from "../../../Components/Navigation/Buttons/Button";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
function convertToDate(timestamp){
    var d = new Date(timestamp);
    return (d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());
}

class Cart extends React.Component {
  state = {
    total: 0,
    data:this.props.location.state.data.items,
    orderInfo:this.props.location.state.data
  };
  calcSum=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++)
      sum+=arr[i].qty*arr[i].data.price;
    return sum;
  }
  moveToCheckout = () => {
    this.props.history.push("/checkout");
    console.log("Pushed");
  };
  componentWillMount(){
      console.log(this.props)
      if(this.props.location.state==undefined)
        this.props.history.push("/");
  }
  render() {
      
    return (
      <section className="Cart">
        <h1>Order {this.state.orderInfo.orderId}</h1>
        <div className="Cart-Holder">
          <div>
            {this.state.data.map((each, i) => (
              <CartEach
                image={each.data.images[0]}
                title={each.data.title}
                price={each.data.price}
                defSize={each.size}
                variants={each.data.desc.sizes}
                qty={each.qty}
                index={i}
                fixed={true}
              />
            ))}
          </div>
          <div className="Cart-Price">
            <h5>Order Details</h5>
            <table>
              <tbody>
               
                <tr>
                  <th className="lefter">Date</th>
                  <th>{convertToDate(this.state.orderInfo.time)}</th>
                </tr>
                <tr>
                  <th className="lefter">Shipping</th>
                  <th>{this.state.orderInfo.location.address}</th>
                </tr>
                <tr>
                  <th className="lefter">Order ID</th>
                  <th>{this.state.orderInfo.orderId}</th>
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
                    &#8377;{this.state.orderInfo.total}
                  </th>
                </tr>
              </tbody>
            </table>
            <div className="Cart-btn-holder">
              <Button
                click={this.moveToCheckout.bind(this)}
                history={this.props.history}
                link="/checkout"
                text={this.state.orderInfo.status==null?"Thank you":this.state.orderInfo.status}
                big={true}
                disable={true}
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
