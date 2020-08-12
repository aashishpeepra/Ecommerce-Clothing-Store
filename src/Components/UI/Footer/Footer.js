import React, { Component } from "react";
import './Footer.css';
import whatsapp from "../../../assets/Icons/whatsapp.png";
import email from "../../../assets/Icons/email.png";
import call from "../../../assets/Icons/call.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Company__Name">Baby Sukainah Mart</div>
        <div className="Sections">
          <div className="Section__1">
            <h2>Delivery Information</h2>
            <p>
              Cash On Delivery available. Free devliery on order above Rupees.2500.
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
                  <a href="tel:+923106186002">+92 3106186002</a>
                </div>
              </li>
              <li>
                <div className="Footer_holder">
                  <div className="Footer_holder_image">
                    <img src={whatsapp} alt="Whatsapp Icon" />
                  </div>
                  <a href="https://wa.me/03106186002?text=I'm%20Interested%20In%20Your%20Website ">+92 3106186002</a>
                </div>
              </li>
              <li>
                <div className="Footer_holder">
                  <div className="Footer_holder_image">
                    <img src={email} alt="Whatsapp Icon" />
                  </div>
                  <a href="mailto:Sukainahmart@gmail.com">Sukainahmart@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="Footer_holder">
                  <div className="Footer_holder_image">
                    <img src={email} alt="Whatsapp Icon" />
                  </div>
                  <a href="https://facebook.com/babysukainahmart">Facebook</a>
                </div>
              </li>
              <li>
                <div className="Footer_holder">
                  <div className="Footer_holder_image">
                    <img src={email} alt="Whatsapp Icon" />
                  </div>
                  <a href="https://instagram.com/SukainahMart">Instagram</a>
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
