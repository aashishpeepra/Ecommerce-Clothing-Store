import React from "react";
import "./cartEach.css";
import Button from "../../Navigation/Buttons/Button";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
const cartEach = (props) => {
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
            <span className="CartEach-price">$ {props.price}</span>
          </div>
        </div>
        <div className="CartEach-G">
          <div className="CartEach-left">
            <select defaultValue={props.defSize}>
              {props.variants.map((each) => (
                <option value={each}>{each}</option>
              ))}
            </select>
          </div>
          <div className="CartEach-in">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" placeholder="Quantity" />
          </div>
        </div>
        <div className="CartEach-G">
          <div className="CartEach-left">
            <h5>Total</h5>
          </div>
          <div className="CartEach-right">
            <span className="CartEach-price">$ {props.price}</span>
          </div>
        </div>
        <div className="CartEach-G">
          <Button
            text="Remove"
            color="red"
            click={() => props.onRemoveItem(props.index)}
          />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartEach);
