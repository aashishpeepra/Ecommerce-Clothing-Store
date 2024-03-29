import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import Home   from "./Containers/Home/Home";
import Cart   from "./Containers/Cart/Cart"
import Checkout   from "./Containers/Checkout/Checkout"
import SingleProduct   from "./Containers/Single-Product/SingleProduct"
import Products   from "./Containers/Products/Products"
import LogIn   from "./Containers/LogIn/LogIn"
import Signup   from "./Containers/Signup/Signup"
import LoginSignup   from "./Containers/LoginSignup/LoginSignup"
import User   from "./Containers/UserDetails/UserDetails"
import Admin   from "./Containers/Admin/Admin"
import AdminOrders   from "./Containers/Admin/AdminOrders/AdminOrders"
import AdminProducts   from "./Containers/Admin/AdminProducts/AdminProducts";
import AdminProductEach   from "./Containers/Admin/AdminProducts/CreateProduct/CreateProduct";
import  EachOrder   from "./Containers/UserDetails/EachOrder/EachOrder"
import EachOrderAdmin   from "./Containers/Admin/AdminOrders/EachOrder/EachOrder";
import Adminslider from "./Containers/Admin/AdminFront/adminSlider";
import Delivery from "./Components/UI/Footer/delivery/delivery";
import Payment from "./Containers/Payment/Payment";
import Boys from "./Containers/Products/SubProducts/Boys";
import Infants from "./Containers/Products/SubProducts/Infants";
import Accessories from "./Containers/Products/SubProducts/accessory";
import NewArrival from "./Containers/Products/SubProducts/newarrival";
import ForSale from "./Containers/Products/SubProducts/sale";
import Forget from "./Containers/Forget/Forget";
export default class Router extends Component{
    state={

    }

    render(){
        return(
            
            <Switch>
                <Route path="/forgot-password" component={Forget}/>
                <Route exact path="/clothings/boys" component={Boys}/>
                <Route exact path="/clothings/infants" component={Infants}/>
                <Route exact path="/clothings/accessories" component={Accessories}/>
                <Route exact path="/clothings/newarrival" component={NewArrival}/>
                <Route exact path="/clothings/sale" component={ForSale}/>
                <Route path="/payment" component={Payment}/>
                <Route path="/admin/slider" component={Adminslider}/>
                <Route path="/admin/products/:id" component={AdminProductEach}/>
                <Route path="/admin/orders/:id" component={EachOrderAdmin}/>
                <Route path="/admin/orders" component={AdminOrders}/>
                <Route path="/admin/products" component={AdminProducts}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/user/:id" component={EachOrder}/>
                <Route path="/user" component={User}/>
                <Route path="/login-signup" component={LoginSignup}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={LogIn}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/clothing/:id" component={SingleProduct}/>
                
                <Route exact path="/clothings/:id" component={Products}/>
                
                <Route exact path="/clothings" component={Products}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/delivery" component={Delivery} />
            </Switch>
           
        );
    }
}

// thissiteadmin7832675@secret.com
// nDrgjIS6g5cSzGsgmFiw9g095QL2
