import React from 'react';
import "./UserDetails.css";
import Button from "../../Components/Navigation/Buttons/Button";
import OrderTile from "../../Components/UI/OrderTile/orderTile";

import {connect} from 'react-redux';

import {logout} from "../../firebase";

 class UserDetails extends React.Component {
    state = {
        
    }
    
    componentWillMount(){
        console.log(this.props.loggedIn)
        if(!this.props.loggedIn)
        this.props.history.push("/login-signup");
        //const val=this.props.loggedIn?null:this.props.history.push("/login-signup");
        
    }
    navToEachOrder=(data)=>{
        this.props.history.push({
            pathname:"/user/"+data.orderId,
            state:{
                data:data
            }
        })
    }
    render() {
        return (
            <div className="User Login">
                <h1>{this.props.userInfo.name}</h1>
                <div className="User-info-container">
                    <h4>Personal Information</h4>
                    <form>

                        <fieldset>
                            <label htmlFor="number">Phone</label>
                            <input value={this.props.loggedIn?this.props.userInfo.phone:""} text="number" name="number" id="number" placeholder="Phone" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input value={this.props.loggedIn?this.props.userInfo.email:""} text="email" name="email" id="email" placeholder="Email" />
                        </fieldset>
                    </form>
                </div>
                <div className="User-info-container">
                    <h4>Delivery Address</h4>
                    <form>
                        <fieldset>
                            <label htmlFor="city">City</label>
                            <input value={this.props.loggedIn?this.props.userInfo.location.city:""} type="text" name="city" id="city" placeholder="City" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="address">Address</label>
                            <input value={this.props.loggedIn?this.props.userInfo.location.address:""} type="text" name="address" id="address" placeholder="Address" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="pin">Pincode</label>
                            <input value={this.props.loggedIn?this.props.userInfo.location.pincode:""} type="number" name="pin" id="pin" placeholder="Pincode" />
                        </fieldset>
                    </form>
                </div>
                <div style={{marginTop:"20px"}}>

                    
                    <div style={{display:"inline-block",marginLeft:"20px"}}>
                         <Button click={()=>{logout();this.props.history.push("/");}} text="Logout" big={true}/>
                    </div>
                   
                </div>
                <h3 style={{margin:"40px 0 20px 0"}}>
                    My Orders
                </h3>
                <div className="User-info-container">
                    {
                        this.props.userInfo.orders? this.props.userInfo.orders.sort((a,b)=>b.time-a.time).map(each=><OrderTile func={this.navToEachOrder} data={each}/>) :null   
                    }
                    
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
  
  
  export default connect(mapStateToProps)(UserDetails);