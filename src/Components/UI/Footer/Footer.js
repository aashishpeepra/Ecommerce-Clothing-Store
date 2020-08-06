import React, { Component } from "react";
import './Footer.css';
import whatsapp from "../../../assets/Icons/whatsapp.png";
import email from "../../../assets/Icons/email.png";
import call from "../../../assets/Icons/call.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Company__Name">NAME OF COMPANY</div>
        <div className="Sections">
          <div className="Section__1">
            <h2>Visit our Store at</h2>
            <p>
              Address Of The Store
            </p>
          </div>
          <div className="Footer__Spacer"></div>
          <div className="Section__2">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <div className="Footer_holder">
                  <div className="Footer_holder_image">
                    <img src={call} alt="Whatsapp Icon" />
                  </div>
                  <a href="tel:">Call Us</a>
                </div>
              </li>
              <li>
                <div className="Footer_holder">
                  <div className="Footer_holder_image">
                    <img src={whatsapp} alt="Whatsapp Icon" />
                  </div>
                  <a href="https://wa.me/8318530887?text=I'm%20Interested%20In%20Your%20Website ">Whatsapp Us</a>
                </div>
              </li>
              <li>
                <div className="Footer_holder">
                  <div className="Footer_holder_image">
                    <img src={email} alt="Whatsapp Icon" />
                  </div>
                  <a href="mailto:">Email Us</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
