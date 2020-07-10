import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SearchBar from "../SearchList/SearchList";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
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
          <li>
            <NavLink to="/clothings" >Shop</NavLink>
          </li>
          {
            props.loggedIn?(
               <li>
            <NavLink to="/user">My Orders</NavLink>
          </li>
            ):null
          }
         
          <div className="Searchbar__Component">
            <SearchBar />
          </div>
          <li>
            <NavLink to="/cart" >Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login-signup" >{props.loggedIn?props.userInfo.name:"Login/Signup"}</NavLink>
          </li>
        </ul>
      </div>
      <div className="Toolbar__Mobile">
        <div className="Searchbar__Component">
          <SearchBar />
        </div>
        <div className="Toolbar__Mobile--Cart" >
          <NavLink  to="/cart">Cart</NavLink>
        </div>
      </div>
    </nav>
  </header>
);

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userInfo: state.userInfo
  };
};


export default connect(mapStateToProps)(toolbar);
