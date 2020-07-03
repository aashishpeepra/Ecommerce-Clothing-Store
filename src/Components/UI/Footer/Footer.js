import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Company__Name">NAME OF COMPANY</div>
        <div className="Sections">
          <div className="Section__1">
            <h2>Visit our Store at</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, facere! Eveniet ab in voluptate qui magnam, sed iusto
              atque aliquam quasi nam commodi ipsum illo facilis omnis aperiam
              maiores odit!
            </p>
          </div>
          <div className="Footer__Spacer"></div>
          <div className="Section__2">
            <h2>Contact Us</h2>
            <ul>
                <li>Call Number</li>
                <li>Messages</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
