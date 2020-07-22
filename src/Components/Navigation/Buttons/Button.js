import React from 'react';
import "./Button.css";


const button2= (props)=>{
    return (
        <button disabled={props.disable} onClick={props.click} type="button" className={`My-btn ${props.color}  ${props.big?'big':''}`}>
            {props.text}
            {/* {bal} */}
        </button>
    );
}

export default button2;