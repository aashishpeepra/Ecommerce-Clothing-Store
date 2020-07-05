import React from "react";
import Customer from "./Customer/Customer.js";
import "./Customers.css";

export default (props)=>{
    return (
        <div className="reviews-wrapper">
            <h3>Our Happy customers</h3>
             <div className="reviews">
            <Customer/>
            <Customer/>
            <Customer/>
            <Customer/>

        </div>
        </div>
       
        
    );
}