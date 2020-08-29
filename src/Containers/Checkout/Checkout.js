import React from "react";
import "./Checkout.css";
import LogIn from '../LogIn/LogIn';
import signin from "../../assets/Icons/login.png";
import signup from "../../assets/Icons/outbox.png";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actionTypes from "../../store/actions";
import Button from "../../Components/Navigation/Buttons/Button";
import {submitOrder} from "../../firebase";

class Checkout extends React.Component{
    state={
        logged:this.props.loggedIn,
        userInfo:this.props.userInfo,
        extra:0,
    }
    componentWillMount(){
        if(this.props.cart.length===0)
        {
            this.props.history.push("/")
        }
        if(this.props.location.data)
        this.setState({extra:this.props.location.data});
        
    }
    onChanger1=(e)=>{
        let value=e.target.value;
        let name=e.target.name;
        let temp={...this.state.userInfo};
        temp["location"][name]=value;
        this.setState({userInfo:temp});
    }
    calcSum=()=>{
        let cartData=this.props.cart;
        let sum=0;
        for(let i=0;i<cartData.length;i++)
            sum+=cartData[i].data.price * cartData[i].qty;
        return sum;

    }
    submitOrder=()=>{
        let location={...this.state.userInfo};
        let cartData=[...this.props.cart];
        let userBasic={...this.props.userInfo};
        userBasic['location']=location.location;
        let previousOrders;
        if(userBasic.orders==undefined)
            previousOrders=[]
        else
            previousOrders=[...userBasic.orders];
        let sum=0;
        for(let i=0;i<cartData.length;i++)
            sum+=cartData[i].data.price * cartData[i].qty;
        
        let totalOrders=userBasic["orders"];
        
        delete userBasic.orders;
        console.log(cartData,previousOrders);
        // let image=totalOrders.length==0?cartData[0].data.images[0]:totalOrders[0].items[0].data.images[0];
        let image=cartData[0].data.images[0];
        console.log("=====-->",image,totalOrders)
        let currentOrder={
            time:(new Date()).getTime(),
            img:image,
            total:sum+this.state.extra,
            mathod:this.state.extra===250?"cod":"online",
            items:cartData,
            location:location.location,
            orderId:Math.floor(Math.random()*1000000+100)
        }
        totalOrders.push(currentOrder);
        let OrderData={
            userData:userBasic,
            orders:totalOrders
        };
        this.setState({stopper:true});
        submitOrder(OrderData,previousOrders,()=>{
            this.setState({stopper:false});
            this.props.history.push("/user");
        });

        


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
            <div style={{minHeight:"70vh"}}>
                {this.state.stopper?
                <div className="checkout-stopper">
                    <h1>Your order is being placed...</h1>
                </div>:
            <section className="Checkout">
                {
                    this.state.logged ? (
                        <div>
                            <h1>Verify Your Details</h1>
                            <form>
                            <fieldset>
                                <label htmlFor="city">City</label>
                                <input onChange={this.onChanger1} value={this.state.userInfo.location.city}  type="text" name="city" id="city" placeholder="City" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="address">Address</label>
                                <input onChange={this.onChanger1} value={this.state.userInfo.location.address} type="text" name="address" id="address" placeholder="Address" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="pin">Pincode</label>
                                <input onChange={this.onChanger1} value={this.state.userInfo.location.pincode} type="number" name="pincode" id="pin" placeholder="Pincode" />
                            </fieldset>
                            </form>
                            <div style={{marginTop:"30px"}}>
                                <h3>
                                    Total : Rs {this.calcSum() + this.state.extra}
                                </h3>
                            </div>
                            <div style={{marginTop:"20px"}}>
                            <Button text="Place Order" color="blue" big={true} click={this.submitOrder}/>
                            </div>
                            
                        </div>
                    ): ifNotLogged
                }
            </section>
    }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      loggedIn:state.loggedIn,
      userInfo:state.userInfo,
      cart:state.cart
    };
  };
  
  export default connect(mapStateToProps)(Checkout);
  