import React from 'react';
import "./LogIn.css";
import Button from "../../Components/Navigation/Buttons/Button";
import {Link} from "react-router-dom";
export default class LogIn extends React.Component{
    state={

    }
    render(){
        return (
            <div className="Login">
                <h2>Log in</h2>
                <form>
                    
                    <fieldset>
                        <label htmlFor="phone">Email</label>
                        <input type="number" name="phone" id="phone" placeholder="Phone"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </fieldset>
                    <div style={{marginTop:"20px"}}>
                        <Button color={"blue"} click={()=>this.props.history.push("/cart")} text="Login" big={true}/>
                    </div>
                    <div className="Login-Password">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    
                </form>
            </div>
        )
    }
}