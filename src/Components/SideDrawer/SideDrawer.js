import React from "react";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let classes = ["Sidedrawer"];
  if (props.show) {
    classes = ["Sidedrawer", "Open"];
  }
  return (
    <nav className={classes.join(" ")}>
      <div className="Info__Box">
        <div className="Name__Box">Name of User</div>
        <div className="Email__Box">Email ID of User</div>
      </div>
      <div className="Options">
        <div className="Options__Home">HOME</div>
        <div className="Options__Shop">
          <div className="dropdown">
            <button className="dropbtn">SHOP</button>
            <div className="dropdown-content">
              <a href="/">Link 1</a>
              <a href="/">Link 2</a>
              <a href="/">Link 3</a>
              <a href="/">Link 4</a>
            </div>
          </div>
        </div>
        <div className="Options__Cart">CART</div>
        <div className="Options__Orders">MY ORDERS</div>
        <div className="Options__Account">MY ACCOUNT</div>
        <div className="Options__Log">SIGN OUT</div>
      </div>
    </nav>
  );
};

export default sideDrawer;
