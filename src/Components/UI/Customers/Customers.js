import React from "react";
import Customer from "./Customer/Customer.js";
import "./Customers.css";
import first from "../../../assets/Customers/kids-top.jpeg";
import second from "../../../assets/Customers/kids-cloth.jpeg";
import third from "../../../assets/Customers/kids-full-shirt.jpeg";
import fourth from "../../../assets/Customers/kids-shirt.jpeg";

export default class Customers extends React.Component  {
    state={ data:[
        {   image:first,
            name:"Rabia Noreen",
            message:"Received my parcel and satisfying quality. Want to buy more dresses."
        },
        {
            image:second,
            name:"Rahila",
            message:"Got my parcel. Sari and shirts bhut aache hai. My 2nd order and worth it."
        },
        {
            image:third,
            name:"Zainab",
            message:"Just got my parcel amazing fabric"
        },
        {
            image:fourth,
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
                    <Customer image={this.state.data[this.state.val].image}/>
            </div>
        </div>


    );
            }
}