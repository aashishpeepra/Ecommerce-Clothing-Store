import React from 'react';
import "./Product.css";
import Button from "../../../Navigation/Buttons/Button";
import {Link} from 'react-router-dom';
export default (props) => {
    const data=props.data=={}?{
        images:[],
        alt:"",
        title:"",
        price:""
    }:props.data;
    // console.log("--->",data);
    return (
       
        <div className="Product" itemProp="itemListElement" itemScope itemType="http://schema.org/Product" >
             {/* <Link to="/cloth/product-name"> */}
            <div className="Product-img-holder" onClick={()=>props.nav(data)}>
                <img itemProp="image" src={data["images"][0]} alt={data["title"]} />
            </div>
            <div className="Product-content">
            <span className="title" itemProp="name">{data["title"]}</span>
            <div style={{fontWeight:"bold"}} className="rate" itemProp="offers" itemScope itemType="http://schema.org/Offer">
                <span  itemProp="priceCurrency" content="PKR">Rs. </span>
    <span itemProp="price" content="230.00"> {data["price"]}</span>
    <span className="Product-offer">{props.data.offer}</span>
            </div>
            {
                props.btn?
                <div className="Product-btn-holder">
                <Button color={data["desc"]["gender"].toLowerCase()==="m"?"boys-color":"girls-color"} text="Add to Cart" big={true} click={props.clicker}/>
                </div>:null
            }
            </div>
            {/* </Link> */}
        </div>
        
    );
}


