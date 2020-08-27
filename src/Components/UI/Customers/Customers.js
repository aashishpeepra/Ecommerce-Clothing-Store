import React from "react";
import Customer from "./Customer/Customer.js";
import "./Customers.css";
import { database } from "firebase";

export default class Customers extends React.Component  {
    state={ data:[
        {
            name:"Rabia Noreen",
            message:"Received my parcel and satisfying quality. Want to buy more dresses."
        },
        {
            name:"Rahila",
            message:"Got my parcel. Sari and shirts bhut aache hai. My 2nd order and worth it."
        },
        {
            name:"Zainab",
            message:"Just got my parcel amazing fabric"
        },
        {
            name:"Nazish",
            message:"Aaj mera order mil gya mah shah allah zabardust."
        }
    ],
    val:0
}
componentDidMount(){
    setInterval(()=>{
        if(this.state.val===3)
        this.setState({val:0});
        else
        this.setState({val:this.state.val+1});
    },2000)
}
    render(){
    return (
        <div className="reviews-wrapper">
            <h3>Our Happy customers</h3>
            <div className="reviews">
                    <Customer name={this.state.data[this.state.val].name} message={this.state.data[this.state.val].message}/>
            </div>
        </div>


    );
            }
}