import React from 'react';
import "./LogIn.css";
import Button from "../../Components/Navigation/Buttons/Button";
import {Link} from "react-router-dom";
import {loginUser} from '../../firebase';
export default class LogIn extends React.Component{
    state={
        userData:{
            email:"",
            password:""
        }
        
    }
    onChanger1=(e)=>{
        let value=e.target.value;
        let name=e.target.name;
        let temp={...this.state.userData};
        temp[name]=value;
        this.setState({userData:temp});
    }
    verifyData=()=>{
        const {email,password}=this.state.userData;
        if(email.length>5 && password.length>=8)
        return true;
        return false;
    }
    loginUserThis=()=>{
        console.log("Called")
        loginUser(this.state.userData.email,this.state.userData.password);
    }
    render(){
        return (
            <div className="Login">
                <h2>Log in</h2>
                <form>
                    
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.onChanger1} type="email" name="email" id="email" placeholder="Email" value={this.state.userData.email}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.onChanger1} type="password" name="password" id="password" placeholder="Password" value={this.state.userData.password}/>
                    </fieldset>
                    <div style={{marginTop:"20px"}}>
                        <Button color={"blue"} click={()=>this.loginUserThis()} disable={!this.verifyData()} text="Login" big={true}/>
                    </div>
                    <div className="Login-Password">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    
                </form>
            </div>
        )
    }
}