import React from 'react';
import "./orderTile.css";
import Button from "../../Navigation/Buttons/Button";

function convertToDate(timestamp){
    var d = new Date(timestamp);
    return (d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear());
}

export default (props)=>{
    return (
        <div className="orderTile">
            <div className="order-img-holder">
                <img src={props.data.img} alt="Cart Bag"/>
            </div>
            
                <span>
                    {convertToDate(props.data.time)}
                </span>
                <span>
                    Rs {props.data.total}
                </span>
                <Button click={()=>props.func(props.data)} text="View" big={true}/>
        </div>
    )
}