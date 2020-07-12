import React, {Component,Suspense} from "react";
import {Switch, Route} from 'react-router-dom';
const Home = React.lazy(()=> import("./Containers/Home/Home"));
const Cart = React.lazy(()=>import("./Containers/Cart/Cart"))
const Checkout = React.lazy(()=>import("./Containers/Checkout/Checkout"))
const SingleProduct = React.lazy(()=>import("./Containers/Single-Product/SingleProduct"))
const Products = React.lazy(()=>import("./Containers/Products/Products"))
const LogIn = React.lazy(()=>import("./Containers/LogIn/LogIn"))
const Signup = React.lazy(()=>import("./Containers/Signup/Signup"))
const LoginSignup = React.lazy(()=>import("./Containers/LoginSignup/LoginSignup"))
const User = React.lazy(()=>import("./Containers/UserDetails/UserDetails"))
const Admin = React.lazy(()=>import("./Containers/Admin/Admin"))
const AdminOrders=React.lazy(()=>import("./Containers/Admin/AdminOrders/AdminOrders"))
const AdminProducts = React.lazy(()=>import("./Containers/Admin/AdminProducts/AdminProducts"));

const  EachOrder = React.lazy(()=>import("./Containers/UserDetails/EachOrder/EachOrder"))
export default class Router extends Component{
    state={

    }

    render(){
        return(
            <Suspense fallback={<h1 style={{marginTop:"80px"}}>Loading...</h1>}>
            <Switch>
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
            </Suspense>
        );
    }
}