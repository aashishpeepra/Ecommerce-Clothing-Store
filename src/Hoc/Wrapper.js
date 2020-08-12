import React from "react";
import "./Wrapper.css";
import whatsapp from "../assets/Icons/whatsapp-green.png";
import Toolbar from "../Components/Toolbar/Toolbar";
// import Products from "../../Components/UI/Products/Products";
import Footer from "../Components/UI/Footer/Footer";

import SideDrawer from "../Components/SideDrawer/SideDrawer";
import Backdrop from "../Components/Backdrop/Backdrop";

export default class Aux extends React.Component {
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
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop clicked={this.backdropClickHandler} />;
    }
    return (
      <main>
        <Toolbar clicked={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        {this.props.children}
        <div className="sticky-whatsapp">
          <a href="https://wa.me/+923106186002?text=I'm%20Interested%20In%20Your%20Website ">
          <div className="Wrapper_holder">
            <img src={whatsapp} alt="Whatsapp Icon"/>
          </div>
          </a>
        </div>
        <Footer />
      </main>
    );
  }
}
