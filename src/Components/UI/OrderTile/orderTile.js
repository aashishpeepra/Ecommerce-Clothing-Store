import React from 'react';
import "./orderTile.css";
import Button from "../../Navigation/Buttons/Button";

export default (props)=>{
    return (
        <div className="orderTile">
            <div className="order-img-holder">
                <img src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>
            
                <span>
                    27/03/2001
                </span>
                <span>
                    Rs 2001
                </span>
                <Button text="View" big={true}/>
        </div>
    )
}