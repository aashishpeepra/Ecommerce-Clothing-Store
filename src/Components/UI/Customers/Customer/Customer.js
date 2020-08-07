import React from "react"
import "./Customer.css";
export default (props)=>{
    return ( 
        <div className="review">
            <div className="review-left">
                <div className="review-img-holder">
                    <img src="https://cdn.dribbble.com/users/1054100/screenshots/2859350/___-1-01_1x.jpg" alt="Avator"/>
                </div>
            </div>
            <div className="review-right">
                <span id="review-head">
                    {props.name}
                </span>
                <div className="review-right-content">
                    <p>
                    {props.message}
                    </p>
                </div>
            </div>
        </div>
    );
}