import React from "react";
import "./Forget.css";
import Button from "../../Components/Navigation/Buttons/Button"
import { resetPass } from "../../firebase";
export default class Forget extends React.Component {
    state = {
        email: "",
        send: false,
        message: ""
    }
    success = () => {
        this.setState({ message: "An email is sent to your address. Change your password from there." });
        setTimeout(()=>{
            this.props.history.push("/login");
        },8000);
    }
    fail = () => {
        this.setState({ message: "Sorry Something went wrong. Check your email." })
        setTimeout(()=>{
            this.props.history.push("/login");
        },5000);
    }
    callReset = () => {
        this.setState({ send: true, message: "Processing..." });
        resetPass(this.state.email, this.success, this.fail);
    }
    render() {
        return (
            <section className="Forget-Password" id="Reset-Password">
                {
                    this.state.send ? (
                        <div className="Forget-Password-Message">
                            <h2>{this.state.message}</h2>
                            <Button text="Go Back" big={true} click={()=>this.props.history.push("/login")} />
                        </div>
                    
                    ) :
                        (
                            <React.Fragment>
                                <h3>Enter your email</h3>
                                <form>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                </form>

                                <Button text="Reset Password" big={true} click={this.callReset} />
                            </React.Fragment>
                        )
                }

            </section>
        )
    }
}