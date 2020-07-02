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
                <span>
                    Aashish Peepra
                </span>
                <div className="review-right-content">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </div>
        </div>
    );
}