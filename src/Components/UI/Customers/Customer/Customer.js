import React from "react"
import "./Customer.css";
export default (props)=>{
    return ( 
        <div className="review-top">
            <div className="review-left-top">
                
                    <img src={props.image} alt="Avator"/>
                
            </div>
            
        </div>
    );
}