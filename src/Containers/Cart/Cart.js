import React from 'react';
import "./Cart.css";
import CartEach from "../../Components/UI/CartEach/cartEach";
import Button from "../../Components/Navigation/Buttons/Button";
import {NavLink} from "react-router-dom";
export default class Cart extends React.Component {
    state = {
        total:0
    }
    moveToCheckout=()=>{
        this.props.history.push("/checkout");
        console.log("Pushed")
    }
    render() {
       console.log(this.props);
        return (
            <section className="Cart">
                <h1>My Shopping Bag</h1>
                <div className="Cart-Holder">
                    <div>
                        <CartEach />
                        <CartEach />
                        <CartEach />
                    </div>
                    <div className="Cart-Price">
                        <h5>Price Details</h5>
                        <table>
                            <tbody>
                            <tr>
                                <th className="lefter">Bag value</th>
                                <th>&#8377;25</th>
                            </tr>
                            <tr>
                                <th className="lefter">Shipping</th>
                                <th>&#8377;30</th>
                            </tr>
                            <tr>
                                <th className="lefter">Packing</th>
                                <th>&#8377;3</th>
                            </tr>
                            <tr>
                                <th className="lefter">Tax</th>
                                <th>&#8377;25</th>
                            </tr>
                            <hr/>
                            <tr className="tota2">
                                <th className="lefter" style={{ fontWeight: "bold", fontSize: "100%" }}>Total</th>
                                <th style={{ fontWeight: "bold", fontSize: "100%" }}>&#8377;240</th>
                            </tr>
                            </tbody>
                        </table>
                        <div  className="Cart-btn-holder" >
                            
                            <Button click={this.moveToCheckout.bind(this)} history={this.props.history} link="/checkout"  text="PLACE ORDER" big={true} />
                           
                            
                        </div>

                    </div>

                </div>

            </section>
        );
    }
}