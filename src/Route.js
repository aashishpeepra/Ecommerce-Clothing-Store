import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home";
import Products from "./Containers/Products/Products";

export default class Router extends Component{
    state={

    }

    render(){
        return(
            <Switch>
                <Route path="/clothings" component={Products}/>
                <Route path="/" component={Home}/>
                
            </Switch>
        );
    }
}