import React from "react";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import SearchBar from "../SearchList/SearchList";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../firebase";
import shoppingCart from "../../assets/Icons/shopping-cart.png";
import sukainah from "../../assets/logo/sukainah-mart.png";
import sukainahLogo from "../../assets/Icons/baby-sukaina-mart.png"

const toolbar = (props) => (
  <header className="Toolbar">
    <nav className="Toolbar__Navigation">
      <div className="Toolbar__Toggle">
        <DrawerToggleButton click={props.clicked} />
      </div>
      <div className="Toolbar__Logo">
        <NavLink to="/">
          <div className="Toolbar-img-container">
            <img src={sukainahLogo} alt="Sukainah Mart Logo"/>
          </div>
        </NavLink>
      </div>
      <div className="Spacer"></div>
      <div className="Toolbar__Navigation--Items">
        <ul>
          <li >
            <NavLink style={{color:"#fff"}} to="/">Home</NavLink>
          </li>
          <li className="redSale">
          <NavLink to="/clothings">New Arrivals</NavLink>
          </li>
          {/* <li className="Toolbar__dropdown--1">
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
          </li> */}
          <li>
            <div className="Toolbar__dropdown">
              <button className="Toolbar__dropbtn ">
                <NavLink to="/clothings">Infants</NavLink>
              </button>
              <div className="Toolbar__dropdown-content blue">
              
                <NavLink   to="/clothings/babyboys">Boys</NavLink>
                <NavLink to="/clothings/babygirls">Girls</NavLink>
              </div>
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
              <NavLink style={{color:"#fff"}} to="/clothings/boys">Boys</NavLink>
            </button>
            <div className="Toolbar__dropdown-content--1">
              <div className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings/boys?q=tops">Tops</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to="/clothings/boys?q=shirts">Shirts</NavLink>
                  <NavLink to="/clothings/boys?q=shirts">T Shirts and polos</NavLink>
                  <NavLink  to="/clothings/boys?q=dungarees">Daungree</NavLink>
                </div>
              </div>
              <div className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings/boys">Bottoms</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to="/clothings/boys?q=jeans">Trousers/PJ/Jeans</NavLink>
                  <NavLink to="/clothings/boys?q=shorts">Shorts</NavLink>
                </div>
              </div>
              <div className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings/boys">Sets</NavLink>
                </button>
              </div>
              <div className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings/boys?q=sleepwear">Sleepwares</NavLink>
                </button>
              </div>
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
              <NavLink style={{color:"#fff"}} to="/clothings/girls">Girls</NavLink>
            </button>
            <div className="Toolbar__dropdown-content--1">
              <div className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings/girls">Tops</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to="/clothings/girls?q=frock">Frocks/Jump Suits</NavLink>
                  <NavLink to="/clothings/girls?q=kurtis">Kurtis</NavLink>
                  <NavLink to="/clothings/girls?q=tshirts">T Shirts</NavLink>
                  <NavLink to="/clothings/girls?q=tunics">Tunics/Blouses</NavLink>
                  <NavLink to="/clothings/girls?q=dungree">Daungree</NavLink>
                </div>
              </div>
              <div className="Toolbar__dropdown--2">
                <button className="Toolbar__dropbtn--2">
                  <NavLink to="/clothings/girls">Bottoms</NavLink>
                </button>
                <div className="Toolbar__dropdown-content--2">
                  <NavLink to="/clothings/girls?q=pants">Pants/Jeans</NavLink>
                  <NavLink to="/clothings/girls?q=tights">Tights</NavLink>
                  <NavLink to="/clothings/girls?q=shorts">Shorts/Skirts</NavLink>
                  <NavLink to="/clothings/girls?q=trousers">Trouser/PJ</NavLink>
                  <NavLink to="/clothings/girls?q=eastern">Eastern Wear</NavLink>
                  <NavLink to="/clothings/girls?q=sets">Sets</NavLink>
                  <NavLink to="/clothings/girls?q=sleepwear">Sleepware</NavLink>
                </div>
              </div>
            </div>
          </li>
          {/* <li className="Toolbar__dropdown--1">
            <button className="Toolbar__dropbtn--1">
              <NavLink to="/FORACCESSORIES">Accessories</NavLink>
            </button>
            <div className="Toolbar__dropdown-content--1">
              <NavLink to="/FORACCESSUNDERGARMENTS">Undergarment/Socks</NavLink>
              <NavLink to="/FORACCESSCAPS">Caps</NavLink>
              <NavLink to="/FORACCESSBIBS">Bibs</NavLink>
              <NavLink to="/FORACCESSBAGS">Bags</NavLink>
              <NavLink to="/FORACCESSBABYNEST">Baby nest</NavLink>
              <NavLink to="/FORACCESSBABYBEDDIN">Baby beddin</NavLink>
            </div>
          </li> */}
          <li>
            <div className="Toolbar__dropdown">
              <button className="Toolbar__dropbtn">
                <NavLink to="/clothings/accessories">Accessories</NavLink>
              </button>
              <div className="Toolbar__dropdown-content">
                <NavLink to="/clothings/accessories?q=undergarment">Undergarment/Socks</NavLink>
                <NavLink to="/clothings/accessories?q=caps">Caps</NavLink>
                <NavLink to="/clothings/accessories?q=bibs">Bibs</NavLink>
                <NavLink to="/clothings/accessories?q=bags">Bags</NavLink>
                <NavLink to="/clothings/accessories?q=nest">Baby nest</NavLink>
                <NavLink to="/clothings/accessories?q=beddin">Baby beddin</NavLink>
              </div>
            </div>
          </li>
          <li className="redSale">
            <NavLink to="/clothings">Sale</NavLink>
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
            <NavLink style={{color:"#fff"}} to="/login-signup">
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
              <span style={{color:"#fff"}}>{props.cartLen}</span>
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
