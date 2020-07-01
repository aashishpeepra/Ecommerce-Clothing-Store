import React from 'react';
import "./Product.css";
import Button from "../../../Navigation/Buttons/Button";
export default (props) => {
    return (
        <div className="Product" itemProp="itemListElement" itemScope itemType="http://schema.org/Product" >
            <div className="Product-img-holder">
                <img itemProp="image" src="https://review.chinabrands.com/chinabrands/seo/image/20180913/wholesale%20boutique%20clothing.jpg" alt="Some Mountains" />
            </div>
            <span itemProp="name">Latest Shirt</span>
            <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <span itemProp="priceCurrency" content="PKR">$</span>
                <span itemProp="price" content="230.00">230</span>
            </div>
            {
                props.btn?<Button text="Add to Cart" />:null
            }
            
        </div>
    );
}


