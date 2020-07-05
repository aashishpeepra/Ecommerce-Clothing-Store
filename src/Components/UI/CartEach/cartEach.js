import React from "react";
import "./cartEach.css";
import Button from "../../Navigation/Buttons/Button";
export default (props)=>{
    return(
        <div className="CartEach">
            <div className="CartEach-img-holder">
                <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/5832159/2018/5/11/567244f6-7be6-4389-9ee3-3f85616846a71526045288519-VIMAL-JONNEY-Black-Solid-Lounge-Pant-3981526045288363-1.jpg" alt=""/>
            </div>
            <div className="CartEach-info">
                <div className="CartEach-G">
                    <div className="CartEach-left">
                        <h3>Trendy Shirt</h3>
                    </div>
                    <div className="CartEach-right">
                        <span className="CartEach-price">$ 24</span>
                    </div>
                </div>
                <div className="CartEach-G">
                    <div className="CartEach-left">
                        <select defaultValue="M">
                            <option value="L">L</option>
                            <option value="X">X</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                    <div className="CartEach-in">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity"  placeholder="Quantity" />
                    </div>
                </div>
                <div className="CartEach-G">
                    <div className="CartEach-left">
                        <h5>Total</h5>
                    </div>
                    <div className="CartEach-right">
                        <span className="CartEach-price">$ 240</span>
                    </div>
                </div>
                <div className="CartEach-G">
                    <Button text="Remove" color="red"/>
                </div>
            </div>
        </div>
    );
}