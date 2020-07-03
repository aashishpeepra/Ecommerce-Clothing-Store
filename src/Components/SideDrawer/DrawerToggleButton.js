import React from "react";
import "./DrawerToggleButton.css";

const drawerToggleButton = (props) => (
  <button className="Toggle_Button" onClick={props.click}>
    <div className="Toggle__Button--Line" />
    <div className="Toggle__Button--Line" />
    <div className="Toggle__Button--Line" />
  </button>
);

export default drawerToggleButton;
