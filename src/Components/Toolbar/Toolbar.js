import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SearchBar from "../SearchList/SearchList";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import { logout } from "../../firebase";
import shoppingCart from "../../assets/Icons/shopping-cart.png";
import sukainah from "../../assets/logo/sukainah-mart.png";

const toolbar = (props) => (
  <header className="Toolbar">
    <nav className="Toolbar__Navigation">
      <div className="Toolbar__Toggle">
        <DrawerToggleButton click={props.clicked} />
      </div>
      <div className="Toolbar__Logo">
        <NavLink to="/">
          <div className="Toolbar-img-container">
            <img src={sukainah} alt="Sukainah Mart Lofo"/>
          </div>
        </NavLink>
      </div>
      <div className="Spacer"></div>
      <div className="Toolbar__Navigation--Items">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="Toolbar__dropdown--1">
            <button className="Toolbar__dropbtn--1">
              <NavLink to={{pathname:"/clothings",state:{gender:"m",category:"",age:-1}}}>Infants</NavLink>
            </button>
            <div className="Toolbar__dropdown-content--1">
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings">Boys</NavLink>
                </button>
              </NavLink>
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings">Girls</NavLink>
                </button>
              </NavLink>
            </div>
          </li>
          {/* <li>
            <div className="Toolbar__dropdown">
              <button className="Toolbar__dropbtn">
                <NavLink to={{pathname:"/clothings",state:{gender:"m",category:"",age:-1}}}>Boys</NavLink>
              </button>
              <div className="Toolbar__dropdown-content">
                <NavLink to={{pathname:"/clothings/mtshirts",state:{gender:"m",category:"tshirts",age:-1}}}>T-Shirts</NavLink>
                <NavLink to={{pathname:"/clothings/mjeans",state:{gender:"m",category:"jeans",age:-1}}}>Jeans</NavLink>
                <NavLink to={{pathname:"/clothings/mshorts",state:{gender:"m",category:"shorts",age:-1}}}>Shorts</NavLink>
                <NavLink to={{pathname:"/clothings/m2pc",state:{gender:"m",category:"2pc",age:-1}}}>2 PC</NavLink>
                <NavLink to={{pathname:"/clothings/mdungarees",state:{gender:"m",category:"dungarees",age:-1}}}>Dungarees</NavLink>
                <NavLink to={{pathname:"/clothings/mdenim",state:{gender:"m",category:"denim",age:-1}}}>Denim</NavLink>
              </div>
            </div>
          </li> */}
          <li className="Toolbar__dropdown--1">
            <button className="Toolbar__dropbtn--1">
              <NavLink to={{pathname:"/clothings",state:{gender:"m",category:"",age:-1}}}>Boys</NavLink>
            </button>
            <div className="Toolbar__dropdown-content--1">
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings">Tops</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to={{pathname:"/clothings/mshirts",state:{gender:"m",category:"shirts",age:-1}}}>Shirts</NavLink>
                  <NavLink to={{pathname:"/clothings/mtshirts",state:{gender:"m",category:"tshirts",age:-1}}}>T Shirts and polos</NavLink>
                  <NavLink  to={{pathname:"/clothings/mdungarees",state:{gender:"m",category:"dungarees",age:-1}}}>Daungree</NavLink>
                </div>
              </NavLink>
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings">Bottoms</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to={{pathname:"/clothings/mjeans",state:{gender:"m",category:"jeans",age:-1}}}>Trousers/PJ/Jeans</NavLink>
                  <NavLink to={{pathname:"/clothings/mshorts",state:{gender:"m",category:"shorts",age:-1}}}>Shorts</NavLink>
                </div>
              </NavLink>
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/">Sets</NavLink>
                </button>
              </NavLink>
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/">Sleepwares</NavLink>
                </button>
              </NavLink>
            </div>
          </li>
          {/* <li>
            <div className="Toolbar__dropdown">
              <button className="Toolbar__dropbtn">
                <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"",age:-1}}}>Girls</NavLink>
              </button>
              <div className="Toolbar__dropdown-content">
              <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"tshirts",age:-1}}}>T-Shirts</NavLink>
                <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"jeans",age:-1}}}>Jeans</NavLink>
                <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"3pc",age:-1}}}>3 PC</NavLink>
                <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"2pc",age:-1}}}>2 PC</NavLink>
                <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"tights",age:-1}}}>Tights</NavLink>
                <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"kurti",age:-1}}}>Kurti</NavLink>
                <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"frocks",age:-1}}}>Frocks</NavLink>
              </div>
            </div>
          </li> */}
           <li className="Toolbar__dropdown--1">
            <button className="Toolbar__dropbtn--1">
              <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"",age:-1}}}>Girls</NavLink>
            </button>
            <div className="Toolbar__dropdown-content--1">
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/">Tops</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"frocks",age:-1}}}>Frocks/Jump Suits</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"kurti",age:-1}}}>Kurtis</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"tshirts",age:-1}}}>T Shirts</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"2pc",age:-1}}}>Tunics/Blouses</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"2pc",age:-1}}}>Daungree</NavLink>
                </div>
              </NavLink>
              <NavLink to="\" className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/">Bottoms</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"jeans",age:-1}}}>Pants/Jeans</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"tights",age:-1}}}>Tights</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"frocks",age:-1}}}>Shorts/Skirts</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"jeans",age:-1}}}>Trouser/PJ</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"jeans",age:-1}}}>Eastern Wear</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"jeans",age:-1}}}>Sets</NavLink>
                  <NavLink to={{pathname:"/clothings",state:{gender:"f",category:"jeans",age:-1}}}>Sleepware</NavLink>
                </div>
              </NavLink>
            </div>
          </li>
          {/* <li>
            <div className="Toolbar__dropdown">
              <button className="Toolbar__dropbtn">
                <NavLink to={{pathname:"/clothings",state:{age:0,gender:"m",category:""}}}>Baby Boys</NavLink>
              </button>
              <div className="Toolbar__dropdown-content">
                <NavLink to={{pathname:"/clothings",state:{}}}>Shirts</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>T-Shirts</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>Jeans</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>Pants</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>Trousers</NavLink>
              </div>
            </div>
          </li> */}
          {/* <li>
            <div className="Toolbar__dropdown">
              <button className="Toolbar__dropbtn">
                <NavLink to={{pathname:"/clothings",state:{gender:"f",age:0,category:""}}}>Baby Girls</NavLink>
              </button>
              <div className="Toolbar__dropdown-content">
                <NavLink to={{pathname:"/clothings",state:{}}}>Shirts</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>T-Shirts</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>Jeans</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>Pants</NavLink>
                <NavLink to={{pathname:"/clothings",state:{}}}>Trousers</NavLink>
              </div>
            </div>
          </li> */}
          <div className="Searchbar__Component">
            <SearchBar />
          </div>
          <li>
            <NavLink to="/cart">
              <div className="Toolbar_cart">
              <div className="Toolbar_icon">
                <img src={shoppingCart} alt="Cart"/>
              </div>
              <span>{props.cartLen}</span>
              </div>
            </NavLink>
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
          <NavLink to="/cart">
          <div className="Toolbar_cart">
              <div className="Toolbar_icon">
                <img src={shoppingCart} alt="Cart"/>
              </div>
              <span>{props.cartLen}</span>
              </div>
          </NavLink>
        </div>
      </div>
    </nav>
  </header>
);

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    userInfo: state.userInfo,
    cartLen:state.cart.length
  };
};

export default connect(mapStateToProps)(toolbar);
