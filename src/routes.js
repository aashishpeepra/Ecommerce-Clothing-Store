import React, {Component,Suspense} from "react";
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
export default class Router extends Component{
    state={

    }

    render(){
        return(
            
            <Switch>
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
                <Route path="/clothings" component={Products}/>
                <Route path="/" component={Home}/>
                
            </Switch>
           
        );
    }
}