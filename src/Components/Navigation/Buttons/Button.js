import React from 'react';
import "./Button.css";

export default (props)=>{
    return (
        <button type="button" className="My-btn">
            {props.text}
        </button>
    );
}