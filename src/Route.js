import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import Home from "./Containers/Home/Home"
export default class Router extends Component{
    state={

    }

    render(){
        return(
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        );
    }
}