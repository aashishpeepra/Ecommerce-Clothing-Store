import React from "react"
import "./Customer.css";
export default (props)=>{
    return ( 
        <div className="review">
            <div className="review-left">
                
                    <img src={props.image} alt="Avator"/>
                
            </div>
            
        </div>
    );
}