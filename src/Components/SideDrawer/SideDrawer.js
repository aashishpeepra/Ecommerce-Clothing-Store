import React from "react";
import "./SideDrawer.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { logout } from "../../firebase";

const sideDrawer = (props) => {
  let classes = ["Sidedrawer"];
  if (props.show) {
    classes = ["Sidedrawer", "Open"];
  }
  return (
    <nav className={classes.join(" ")}>
      <div className="Info__Box" onClick={props.off}>
        <div className="Name__Box" >
          <NavLink to="/user">{!props.loggedIn ? "" : props.userInfo.name}</NavLink>
        </div>
        <div className="Email__Box">
        <NavLink to="/user">{!props.loggedIn ? "" : props.userInfo.email}</NavLink>
        </div>
      </div>
      <div className="Options">
        <div className="Options__Home" onClick={props.off}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="Options__Cart" onClick={props.off}>
          <NavLink to="/clothings">New Arrival</NavLink>
        </div>
        <div className="Options__Cart" onClick={props.off}>
          <NavLink to="/clothings/sale">Sales</NavLink>
        </div>
        <div className="Options__Home" onClick={props.off}>
          <NavLink to="/clothings/boys">Boys</NavLink>
        </div>
        <div className="Options__Home" onClick={props.off}>
          <NavLink to="/clothings/girls">Girls</NavLink>
        </div>
        <div className="Options__Home" onClick={props.off}>
          <NavLink to="/clothings/babyboys">Baby Boys</NavLink>
        </div>
        <div className="Options__Home" onClick={props.off}>
          <NavLink to="/clothings/bbygirls">Baby Girls</NavLink>
        </div>
        <div className="Options__Cart" onClick={props.off}>
          <NavLink to="/cart">Cart</NavLink>
        </div>
        {
          props.loggedIn ? (
            <React.Fragment>
              <div className="Options__Orders" onClick={props.off}>
                <NavLink to="/user">My Orders</NavLink>
              </div>
              <div className="Options__Account" onClick={props.off}>
                <NavLink to="/user">My Account</NavLink>
              </div>
            </React.Fragment>

          ) : null
        }

        <div className="Options__Log" onClick={props.off}>
          <NavLink
            onClick={props.loggedIn ? logout : () => { }}
            to={props.loggedIn ? "logout" : "login"}
          >
            {props.loggedIn ? "Log out" : "Log in"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps)(sideDrawer);
