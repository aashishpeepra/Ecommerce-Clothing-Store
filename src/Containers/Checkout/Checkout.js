import React from "react";
import "./Checkout.css";
import LogIn from '../LogIn/LogIn';
import signin from "../../assets/Icons/login.png";
import signup from "../../assets/Icons/outbox.png";
import { Link } from "react-router-dom";
import Button from "../../Components/Navigation/Buttons/Button";

export default class Checkout extends React.Component{
    state={
        logged:true,
        phone:918318530887,
        address:"hello",
        location:{
            city:"Ladakkh",
            address:"7/M/19 Dabouli",
            pincode:208022
        }
    }
    onChanger1=(e)=>{
        let value=e.target.value;
        let name=e.target.name;
        let temp={...this.state.location};
        temp[name]=value;
        this.setState({userData:temp});
    }
    render(){
        let ifNotLogged=(
            <div>
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
        return (
            <section className="Checkout">
                {
                    this.state.logged ? (
                        <div>
                            <h1>Verify Your Details</h1>
                            <form>
                            <fieldset>
                                <label htmlFor="city">City</label>
                                <input onChange={this.onChanger1} value={this.state.location.city}  type="text" name="city" id="city" placeholder="City" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="address">Address</label>
                                <input onChange={this.onChanger1} value={this.state.location.address} type="text" name="address" id="address" placeholder="Address" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="pin">Pincode</label>
                                <input onChange={this.onChanger1} value={this.state.location.pincode} type="number" name="pin" id="pin" placeholder="Pincode" />
                            </fieldset>
                            </form>
                            <div style={{marginTop:"30px"}}>
                                <h3>
                                    Total : Rs3400
                                </h3>
                            </div>
                            <div style={{marginTop:"20px"}}>
                            <Button text="Place Order" color="blue" big={true}/>
                            </div>
                            
                        </div>
                    ): ifNotLogged
                }
            </section>
        )
    }
}