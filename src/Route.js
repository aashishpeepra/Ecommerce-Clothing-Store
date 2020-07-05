import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import Cart from "./Containers/Cart/Cart";
import Checkout from "./Containers/Checkout/Checkout";
import SingleProduct from "./Containers/Single-Product/SingleProduct";
import Products from "./Containers/Products/Products";
import LogIn from "./Containers/LogIn/LogIn";
import Signup from "./Containers/Signup/Signup";
export default class Router extends Component{
    state={

    }

    render(){
        return(
            <Switch>
                <Route path="/signup" component={Signup}/>
                <Route path="/login" component={LogIn}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/cloth" component={SingleProduct}/>
                <Route path="/clothings" component={Products}/>
                <Route path="/" component={Home}/>
                
            </Switch>
        );
    }
}