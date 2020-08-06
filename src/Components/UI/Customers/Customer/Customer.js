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
                    userName
                </span>
                <div className="review-right-content">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                </div>
            </div>
        </div>
    );
}