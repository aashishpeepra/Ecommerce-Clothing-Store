import React from 'react';
import "./Signup.css";
import Button from "../../Components/Navigation/Buttons/Button";
import { Link } from "react-router-dom";
export default class SignUn extends React.Component {
    state = {
        stage:1,
        verify:true,
        userData:{
            name:"",
            phone:100000,
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
        let phone= String(this.state.userData.phone).length>=10;
        return name || password || phone ;
        
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
                            <label htmlFor="phone">phone</label>
                            <input onChange={this.onChanger1} value={this.state.userData.phone}  type="number" name="phone"  id="phone" placeholder="Phone" />
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
                                <input onChange={this.onChanger2} value={this.state.userData.location.pincode} type="number" name="pin" id="pin" placeholder="Pincode" />
                            </fieldset>
                            </div>
                        )}
                    <div style={{ marginTop: "20px" }}>
                        <Button color={"white"} disable={!this.checkVerifyFirst()} click={this.state.stage==1?()=>{this.setState({stage:2});alert("Clicked")}:()=>this.props.history.push("/cart")} text={this.state.stage==1?"Next":"Sign up"} big={true} />
                    </div>
                    <div className="Login-Password">
                        <Link to="/login">Already Have Account? Login</Link>
                    </div>

                </form>
            </div>
        )
    }
}