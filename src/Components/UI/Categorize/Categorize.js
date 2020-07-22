import React from "react";
import "./Categorize.css";

export default (props) => {
    return (
        <div className="categorize-container">


            <h3>
                Categorize
        </h3>
            <div className="categorize">
                <div className="categorize-left">
                    
                    <div className="categorize-left-img-holder one ">
                        {/* <img alt="" src="https://img.ltwebstatic.com/images2_pi/2018/09/21/15375094852194208966.webp"/> */}
                    </div>
                    
                    <div className="categorize-left-img-holder two">
                        {/* <img alt="" src="https://img.ltwebstatic.com/images3_pi/2020/03/04/15833061265aed4ce96d5a3639d175d1b61bab8637.webp"/> */}
                    </div>
                </div>
                <div className="categorize-right">
                    
                    <div className="categorize-right-img-holder">
                        {/* <img src="https://img.ltwebstatic.com/images2_pi/2018/09/21/15375094852194208966.webp" alt=""/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}