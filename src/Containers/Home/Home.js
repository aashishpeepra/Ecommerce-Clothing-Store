import React, { Component } from "react";
// import Products from "../../Components/UI/Products/Products";
// import Footer from "../../Components/UI/Footer/Footer";
import Toolbar from "../../Components/Toolbar/Toolbar";
// import SideDrawer from "../../Components/SideDrawer/SideDrawer";
// import Backdrop from "../../Components/Backdrop/Backdrop";

export default class Home extends Component {
  state = {
    SideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    // let backdrop;
    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop clicked={this.backdropClickHandler} />;
    // }
    return (
      <main style={{ height: "100%" }}>
        {/* <h1>Home</h1>
        <Products />
        <Footer /> */}
        {/* <Toolbar clicked={this.drawerToggleClickHandler} /> */}
        {/* <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop} */}
      </main>
    );
  }
}
