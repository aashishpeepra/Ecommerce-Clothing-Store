import React from "react";
import "./cartEach.css";
import Button from "../../Navigation/Buttons/Button";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";

class cartEach extends React.Component {
  temp = this.props.qty;
  current = 0;
  database = {
    s: "9/12 Months",
    m: "12/18 Months",
    l: "18/24 Months",
    x: "2/3 Years",
    xl: "3/4 Years",
  };
  agesSelect = [
    {
      s: "0/3M",
      m: "3/6M",
      l: "6/9M",
      x: "9/12M",
      xl: "12/18M",
      xxl: "18/24M",
      xxxl: "2/3Y",
    },
    {
      s: "3/4Y",
      m: "5/6Y",
      l: "7/8Y",
      x: "9/10Y",
      xl: "11/12Y",
      xxl: "13/14Y",
      xxxl: "15/16Y",
      xxxxl: "17/18Y",
    },
  ];
  generateSelect = () => {
    console.log(this.props.quantity,this.state.current)
    let data = [];
    for (let i = 1; i <= this.props.quantity[this.state.current]; i++)
      data.push(<option value={i}>{i}</option>);
 
    return (
      <select
        value={this.temp}
        onChange={(e) => this.checkVal(e, this.props.index)}
      >
        {data}
      </select>
    );
  };
  checkVal = (e, index) => {
    let a = e.target.value;
    // if (this.props.fixed) return null;
    // if (a == "") this.temp = 0;
    // if (this.temp == 0) this.temp = 1;
    // if (a > 0 && a <= this.props.quantity[this.state.current]) {
    //   this.props.onChangeQty(a, index);
    //   this.temp = a;
    // }
    console.log(
      a,
      this.temp,
      parseInt(a),
      this.props.quantity[this.state.current]
    );
    a = a.trim();
    if (
      a === "" ||
      parseInt(a) <= parseInt(this.props.quantity[this.state.current])
    ) {
      this.temp = a;

      this.props.onChangeQty(
        a === "" || isNaN(parseInt(a)) ? 1 : parseInt(a),
        index
      );
    }
    return 1;
  };
  state = {
    current: this.props.defSize,
  };
  render() {
    console.log(this.props.quantity);
    return (
      <div className="CartEach">
        
      
        <div className="CartEach-img-holder">
          <img src={this.props.image} alt="" />
        </div>
        <div className="CartEach-info">
          <div className="CartEach-G">
            <div className="CartEach-left">
              <h3>{this.props.title}</h3>
            </div>
            <div className="CartEach-right">
              <span className="CartEach-price">Rs. {this.props.price}</span>
            </div>
          </div>
          <div className="CartEach-G">
            <div className="CartEach-left">
              {this.props.fixed ? (
                <p>{this.props.defSize}</p>
              ) : this.props.variants.length === 0 ? null : (
                <select
                  onChange={(e) => {
                    this.props.onChangeSize(e.target.value, this.props.index);
                    this.temp = 1;
                    this.setState({ current: e.target.value });
                  }}
                  defaultValue={this.props.defSize}
                >
                  {this.props.variants.map((each) => {
                    if (
                      this.props.quantity[each] != 0 &&
                      this.props.quantity[each] != undefined
                    )
                      return <option value={each}>{each}</option>;
                  })}
                </select>
              )}
            </div>
            {this.props.fixed ? (
              <p>{this.props.qty}</p>
            ) : (
              <div className="CartEach-in">
                <label htmlFor="quantity">Quantity</label>
                {this.generateSelect()}
              </div>
              
            )}
          </div>
          <div className="CartEach-G">
            <div className="CartEach-left">
              <h5>Total</h5>
            </div>
            <div className="CartEach-right">
              <span className="CartEach-price">
                Rs. {this.props.price * this.props.qty}
              </span>
            </div>
          </div>
          <div className="CartEach-G">
            {!this.props.fixed ? (
              <Button
                text="Remove"
                color="red"
                click={() => this.props.onRemoveItem(this.props.index)}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

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
      dispatch({ type: actionTypes.EDIT_QTY, obj: { q, index } });
    },
    onChangeSize: (size, index) => {
      dispatch({ type: actionTypes.EDIT_SIZE, obj: { size, index } });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartEach);
