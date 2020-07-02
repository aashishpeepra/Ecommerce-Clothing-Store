import React from 'react';
import "./Product.css";
import Button from "../../../Navigation/Buttons/Button";
export default (props) => {
    return (
        <div className="Product" itemProp="itemListElement" itemScope itemType="http://schema.org/Product" >
            <div className="Product-img-holder">
                <img itemProp="image" src="https://fluffandfoldlaundromat.com/wp-content/uploads/2019/12/blog-4-1080x675.jpg" alt="Some Mountains" />
            </div>
            <span className="title" itemProp="name">Latest Shirt</span>
            <div style={{fontWeight:"bold"}} className="rate" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <span  itemProp="priceCurrency" content="PKR">₹</span>
                <span itemProp="price" content="230.00">230</span>
            </div>
            {
                props.btn?<Button text="Add to Cart" />:null
            }
            
        </div>
    );
}


