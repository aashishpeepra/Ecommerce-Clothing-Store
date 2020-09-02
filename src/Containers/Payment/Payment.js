import React from "react";
import "./Payment.css"
class Payment extends React.Component {
    state = {

    }
    takeToCheckOut = (value) => {
        this.props.history.push({pathname:"/checkout",data:value});
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
                        <button type="button" onClick={()=>this.takeToCheckOut(200)}>
                            Continue
                        </button>
                    </div>
                    <div className="Payment-Details-Each">
                        <h2>Advance Pay</h2>
                        <ul>
                            <li>350 Rupees delivery charge.</li>
                            <li>Leopard courier services (LCS)</li>
                            <li>Easy Paisa Mobile Account no 0092318-2003004 Farhan Ahmed</li>
                            <li>Jazz cash Mobile Account no 00923219005837</li>
                            <li>Meezan Bank Farhan Ahmed A/c  0708. 0103064376</li>
                        </ul>
                        <button type="button" onClick={()=>this.takeToCheckOut(350)}>
                            Pay and Continue
                        </button>
                    </div>
                </div>

            </section>

        )
    }
}

export default Payment;