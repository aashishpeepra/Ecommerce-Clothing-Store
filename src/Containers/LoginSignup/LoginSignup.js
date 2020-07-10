import React from "react";
import "./LoginSignup.css";
import signin from "../../assets/Icons/login.png";
import signup from "../../assets/Icons/outbox.png";
import {connect} from 'react-redux';
import * as actionTypes from "../../store/actions";
class LoginSignup extends React.Component{
    state={

    }
    componentWillMount(){
        const temp=this.props.loggedIn?this.props.history.push("/user"):null;
    }
    render(){
        return (
            <div className="login-signup-holder">
                <h1>Choose one to continue</h1>
            <div className="logValues">
                <div className="logDiv" onClick={()=>this.props.history.push("/login")} >
                    
                    <div className="log-img-holder">
                    <img src={signin} alt="Sign in Icon"/>
                    </div>
                    <h4>Log In</h4>
              
                </div>
                <div className="logDiv" onClick={()=>this.props.history.push("/signup")}>
                    
                    <div className="log-img-holder">
                    <img src={signup} alt="Sign up Icon"/>
                    </div>
                    
                    <h4>Sign up</h4>
                   
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn,
      userInfo: state.userInfo
    };
  };
  
  
  export default connect(mapStateToProps)(LoginSignup);
  