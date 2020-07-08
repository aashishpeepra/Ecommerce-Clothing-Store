import React from 'react';
import "./UserDetails.css";
import Button from "../../Components/Navigation/Buttons/Button";
import OrderTile from "../../Components/UI/OrderTile/orderTile";

export default class UserDetails extends React.Component {
    state = {

    }
    render() {
        return (
            <div className="User Login">
                <h1>Aashish Peepra</h1>
                <div className="User-info-container">
                    <h4>Personal Information</h4>
                    <form>

                        <fieldset>
                            <label htmlFor="number">Phone</label>
                            <input text="number" name="number" id="number" placeholder="Phone" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input text="email" name="email" id="email" placeholder="Email" />
                        </fieldset>
                    </form>
                </div>
                <div className="User-info-container">
                    <h4>Delivery Address</h4>
                    <form>
                        <fieldset>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" id="city" placeholder="City" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="address" placeholder="Address" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="pin">Pincode</label>
                            <input type="number" name="pin" id="pin" placeholder="Pincode" />
                        </fieldset>
                    </form>
                </div>
                <div style={{marginTop:"20px"}}>
                    <Button text="Update Details" big={true}/>
                </div>
                <h3 style={{margin:"40px 0 20px 0"}}>
                    My Orders
                </h3>
                <div className="User-info-container">
                    <OrderTile/>
                    <OrderTile/>
                </div>
            </div>

        )
    }
}