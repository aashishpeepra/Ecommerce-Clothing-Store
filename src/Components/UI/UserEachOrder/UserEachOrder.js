import React from 'react';
import "./UserEachOrder.css";
import CartEach from "../CartEach/cartEach";


export default (props)=>{
    return (
        <div className="UserEach">
            <CartEach/>
            <CartEach/>
        </div>
    )
}
