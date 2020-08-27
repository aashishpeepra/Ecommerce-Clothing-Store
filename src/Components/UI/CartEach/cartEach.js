import React from "react";
import "./cartEach.css";
import Button from "../../Navigation/Buttons/Button";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";


const cartEach = (props) => {
  let temp=props.qty;
  const database={
    s:"9/12 Months",
    m:"12/18 Months",
    l:"18/24 Months",
    x:"2/3 Years",
    xl:"3/4 Years"
  }
  const agesSelect= [
    {  s:"0/3M" ,m: "3/6M" , l:"6/9M" , x: "9/12M",  xl: "12/18M" ,xxl:  "18/24M"  , xxxl: "2/3Y"   },
    { s:"3/4Y"  ,m:  "5/6Y"  ,l:  "7/8Y" ,x:  "9/10Y" ,xl:  "11/12Y" , xxl: "13/14Y" }
]
  const checkVal = (e,index) => {
    let a = e.target.value;
    if(props.fixed)
      return null
    if(a=="")
      temp="";
    if (a > 0 && a < 100)
    {
      props.onChangeQty(a,index);
      temp=a;
    }
      
      return 1;
  }
  return (
    <div className="CartEach">
      <div className="CartEach-img-holder">
        <img src={props.image} alt="" />
      </div>
      <div className="CartEach-info">
        <div className="CartEach-G">
          <div className="CartEach-left">
            <h3>{props.title}</h3>
          </div>
          <div className="CartEach-right">
            <span className="CartEach-price">Rs. {props.price}</span>
          </div>
        </div>
        <div className="CartEach-G">
          <div className="CartEach-left">
            {
              props.fixed ?<p>{props.defSize}</p>:(
                <select onChange={(e)=>props.onChangeSize(e.target.value,props.index)} defaultValue={props.defSize}>
              {props.variants.map((each) => (
                <option value={each}>{agesSelect[props.baby][each.toLowerCase()]}</option>
              ))}
            </select>
              )
            }
            
          </div>
          {
            props.fixed?<p>{props.qty}</p>:(
              <div className="CartEach-in">
            <label htmlFor="quantity">Quantity</label>
            <input onChange={(e)=>checkVal(e,props.index)} value={temp} type="number" id="quantity" placeholder="Quantity" />
          </div>
            )
          }
          
        </div>
        <div className="CartEach-G">
          <div className="CartEach-left">
            <h5>Total</h5>
          </div>
          <div className="CartEach-right">
            <span className="CartEach-price">Rs. {props.price*props.qty}</span>
          </div>
        </div>
        <div className="CartEach-G">
          {
            !props.fixed?<Button
            text="Remove"
            color="red"
            click={() => props.onRemoveItem(props.index)}
          />:null

          }
          
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveItem: (index) =>
      dispatch({ type: actionTypes.DELETE_ITEM_CART, index: index }),
    onChangeQty: (q, index) => {
      dispatch({ type: actionTypes.EDIT_QTY, obj: { q, index } })
    },
    onChangeSize:(size,index)=>{
      dispatch({type:actionTypes.EDIT_SIZE,obj:{size,index}})
    }
  }
    ;
};

export default connect(mapStateToProps, mapDispatchToProps)(cartEach);
