import React from "react";
import "./Payment.css"
class Payment extends React.Component {
    state = {

    }
    takeToCheckOut=()=>{
        this.props.history.push("/checkout");
    }
    render() {
        return (
            <section className="Payment-Details">
                <h1>Choose Payment</h1>
                <div className="Payment-Details-Holder">
                    <div className="Payment-Details-Each">
                        <h2>Cash on delivery</h2>
                        <ul>
                            <li>200 Rupees delivery charge below orders Rs. 2,500</li>
                            <li>Free Delivery on orders above Rs. 2,500</li>
                        </ul>
                        <button type="button" onClick={this.takeToCheckOut}>
                            Continue
                        </button>
                    </div>
                    <div className="Payment-Details-Each">
                        <h2>Advance Pay</h2>
                        <ul>
                            <li>350 Rupees delivery charge.</li>
                        </ul>
                        <button type="button" onClick={this.takeToCheckOut}>
                            Continue
                        </button>
                    </div>
                </div>

            </section>

        )
    }
}

export default Payment;