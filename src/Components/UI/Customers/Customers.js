import React from "react";
import Customer from "./Customer/Customer.js";
import "./Customers.css";
import { database } from "firebase";

export default (props) => {
    const data=[
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
    ]
    return (
        <div className="reviews-wrapper">
            <h3>Our Happy customers</h3>
            <div className="reviews">
                {
                    data.map(each => <Customer name={each.name} message={each.message}/>)
                }
            </div>
        </div>


    );
}