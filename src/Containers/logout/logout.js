import React from 'react';
import {logout} from "../../firebase";


class Logout extends React.Component{
    componentWillMount(){
        logout();
        this.props.history.push("/");
    }
}