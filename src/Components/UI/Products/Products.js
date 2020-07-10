import React from "react";
import Product from "./Product/Product";
import "./Products.css";
import * as actionTypes from "../../../store/actions";
import { connect } from "react-redux";

class Products extends React.Component {

  render() {
    const temp = [];
    // console.log(props.data)
    for (let i = 0; i < 10; i++) temp.push(0);
    const classType =
      this.props.type === "listed" ? "Products-listed" : "Products-stacked";
    return (
      <div
        className={classType}
        itemScope
        itemType="http://schema.org/ItemList"
      >
        {/* <span itemProp="numberOfItems">2</span> */}
        {this.props.data.map((each) => (
          <Product
            nav={this.props.nav}
            data={each}
            btn={this.props.btn}
            key={each.id}
            clicker={() => this.props.onAddToCart(each)}
          />
        ))}
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
    onAddToCart: (eachObj) =>
      dispatch({ type: actionTypes.ADD_TO_CART, obj: eachObj }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

// export default (props) => {
//   const temp = [];
//   // console.log(props.data)
//   for (let i = 0; i < 10; i++) temp.push(0);
//   const classType =
//     props.type === "listed" ? "Products-listed" : "Products-stacked";
//   return (
//     <div className={classType} itemScope itemType="http://schema.org/ItemList">
//       {/* <span itemProp="numberOfItems">2</span> */}
//       {props.data.map((each) => (
//         <Product
//           data={each}
//           btn={props.btn}
//           key={each.id}
//           clicker={() => fnc(each)}
//         />
//       ))}
//     </div>
//   );
// };
