import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SearchBar from "../SearchList/SearchList";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { logout } from "../../firebase";

const toolbar = (props) => (
  <header className="Toolbar">
    <nav className="Toolbar__Navigation">
      <div className="Toolbar__Toggle">
        <DrawerToggleButton click={props.clicked} />
      </div>
      <div className="Toolbar__Logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="Spacer"></div>
      <div className="Toolbar__Navigation--Items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="Toolbar__dropdown--1">
            <button className="Toolbar__dropbtn--1">
              <NavLink to="/clothings">Shop</NavLink>
            </button>
            <div className="Toolbar__dropdown-content--1">
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/">Boys</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <p>Boys-Shirts</p>
                  <p>Boys-T-Shirts</p>
                  <p>Boys-Jeans</p>
                  <p>Boys-Pants</p>
                </div>
              </NavLink>
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/">Girls</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <p>Shirts</p>
                  <p>T-Shirts</p>
                  <p>Jeans</p>
                  <p>Pants</p>
                </div>
              </NavLink>
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/">Infants</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <p>Shirts</p>
                  <p>T-Shirts</p>
                  <p>Jeans</p>
                  <p>Pants</p>
                </div>
              </NavLink>
            </div>
          </li>
          {props.loggedIn ? (
            <li>
              <NavLink to="/user">My Orders</NavLink>
            </li>
          ) : null}

          <div className="Searchbar__Component">
            <SearchBar />
          </div>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login-signup">
              {props.loggedIn ? props.userInfo.name : "Login/Signup"}
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Toolbar__Mobile">
        <div className="Searchbar__Component">
          <SearchBar />
        </div>
        <div className="Toolbar__Mobile--Cart">
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
    </nav>
  </header>
);

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userInfo: state.userInfo,
  };
};

export default connect(mapStateToProps)(toolbar);
