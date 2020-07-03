import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SearchBar from "../SearchList/SearchList";

const toolbar = (props) => (
  <header className="Toolbar">
    <nav className="Toolbar__Navigation">
      <div className="Toolbar__Toggle">
        <DrawerToggleButton click={props.clicked} />
      </div>
      <div className="Toolbar__Logo">
        <a href="/">THE LOGO</a>
      </div>
      <div className="Spacer"></div>
      <div className="Toolbar__Navigation--Items">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">My Orders</a>
          </li>
          <div className="Searchbar__Component">
            <SearchBar />
          </div>
          <li>
            <a href="/">Cart</a>
          </li>
          <li>
            <a href="/">Login/Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
