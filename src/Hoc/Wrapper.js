import React from "react";

import Toolbar from "../Components/Toolbar/Toolbar";
// import Products from "../../Components/UI/Products/Products";
import Footer from "../Components/UI/Footer/Footer";

import SideDrawer from "../Components/SideDrawer/SideDrawer";
import Backdrop from "../Components/Backdrop/Backdrop";

export default  class Aux extends React.Component{
    state = {
        SideDrawerOpen: false,
    }
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return { sideDrawerOpen: !prevState.SideDrawerOpen };
        });
      };
    
      backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
      };
    render(){
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
                <Footer/>
           </main>
        )
    }

}