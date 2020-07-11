import React from 'react';
import "./Signup.css";
import Button from "../../Components/Navigation/Buttons/Button";
import { Link } from "react-router-dom";
import { db, signupUser } from "../../firebase";

export default class SignUn extends React.Component {
    state = {
        stage:1,
        verify:true,
        userData:{
            name:"",
            email:'johndoe@gmail.com',
            password:"",
            location:{
                city:"",
                address:"",
                pincode:1000000
            }
        }
    }
    checkVerifyFirst(){
        let name=this.state.userData.name.length>5;
        let password=this.state.userData.password.length>8;
        let email= String(this.state.userData.email).length>=10;
        return name || password || email ;
        
    }
    checkVerifySecond(){
         let city=this.state.userData.location.city.length>3;
        let address=this.state.userData.location.address.length>5;
        let pincode= String(this.state.userData.location.pincode).length>=4;
        return  city || address || pincode;
    }
    onChanger1=(e)=>{
        let value=e.target.value;
        let name=e.target.name;
        let temp={...this.state.userData};
        temp[name]=value;
        this.setState({userData:temp});
    }
    onChanger2=(e)=>{
        let value=e.target.value;
        let name=e.target.name;
        let temp={...this.state.userData};
        temp["location"][name]=value;
        this.setState({userData:temp});
    }
    shiftNext(){
        this.setState({stage:2});
    }
    signup=()=>{
        signupUser(this.state.userData.email,this.state.userData.password,this.state.userData);
    }
    render() {
        return (
            <div className="Login">
                <h2>Sign up</h2>
                <form>
                    {this.state.stage==1 ? (
                        <div>
                        <fieldset>
                            <label htmlFor="name">Name</label>
                            <input onChange={this.onChanger1} value={this.state.userData.name} type="text" name="name" id="name" placeholder="Name" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input onChange={this.onChanger1} value={this.state.userData.email}  type="email" name="email"  id="email" placeholder="Email" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Password</label>
                            <input onChange={this.onChanger1} value={this.state.userData.password}  type="password" name="password" id="password" placeholder="Password" />
                        </fieldset>
                        </div>
                        ) : (
                            <div>
                            <fieldset>
                                <label htmlFor="city">City</label>
                                <input onChange={this.onChanger2} value={this.state.userData.location.city}  type="text" name="city" id="city" placeholder="City" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="address">Address</label>
                                <input onChange={this.onChanger2} value={this.state.userData.location.address} type="text" name="address" id="address" placeholder="Address" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="pin">Pincode</label>
                                <input onChange={this.onChanger2} value={this.state.userData.location.pincode} type="number" name="pincode" id="pin" placeholder="Pincode" />
                            </fieldset>
                            </div>
                        )}
                    <div style={{ marginTop: "20px" }}>
                        <Button color={"blue"} disable={!this.checkVerifyFirst()} click={this.state.stage==1?()=>{this.setState({stage:2});}:()=>{this.signup();}} text={this.state.stage==1?"Next":"Sign up"} big={true} />
                    </div>
                    <div className="Login-Password">
                        <Link to="/login">Already Have Account? Login</Link>
                    </div>

                </form>
            </div>
        )
    }
}