import React from "react";
import { connect } from "react-redux";
import "./AdminOrders.css";
import OrderTile from "../../../Components/UI/OrderTile/orderTile";

class AdminOrders extends React.Component {
  state = {
    orders: [],
  };
  navToEachOrder = (data) => {
    this.props.history.push({
      pathname: "/admin/orders/" + data.orderId,
      state: {
        data: data,
      },
    });
  };

  render() {
    console.log(this.props);
    return (
      <section className="AdminOrders">
        {this.props.userInfo.orders
          ? this.props.userInfo.orders.map((each) => (
              <OrderTile func={this.navToEachOrder} data={each} />
            ))
          : null}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps)(AdminOrders);
