import React from 'react';
import Product from './Product/Product';
import "./Products.css";
export default (props) => {
    const temp=[];
    console.log(props.data)
    for(let i=0;i<10;i++)
    temp.push(0);
    const classType=props.type==="listed"?"Products-listed":"Products-stacked";
    return (
        <div className={classType} itemScope itemType="http://schema.org/ItemList">
            {/* <span itemProp="numberOfItems">2</span> */}
            {props.data.map(each=><Product data={each} btn={props.btn} key={each.id}/>)}
        </div>

    );
}