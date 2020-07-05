import React from "react";
import "./SizeSelection.css";

class SizeSelection extends React.Component {
  state = {
    variants: ["S", "M", "L", "X"],
    size: "S",
  };

  setSize = (val, ind) => {
    for (let i = 0; i < this.state.variants.length; i++) {
      document.querySelector(
        `.SizeSelection__Size${i + 1}`
      ).style.backgroundColor = "transparent";
      document.querySelector(`.SizeSelection__Size${i + 1}`).style.color =
        "white";
    }
    for (let i = 0; i < this.state.variants.length; i++) {
      if (
        parseInt(
          document
            .querySelector(`.SizeSelection__Size${i + 1}`)
            .attributes.getNamedItem("tabmydex").value
        ) === parseInt(ind)
      ) {
        document.querySelector(
          `.SizeSelection__Size${i + 1}`
        ).style.backgroundColor = "white";
        document.querySelector(`.SizeSelection__Size${i + 1}`).style.color =
          "black";
      }
    }
    this.setState({
      size: val,
    });
  };

  renderCircles = () => {
    return (
      <div className="SizeSelection__Helper">
        {this.state.variants.map((each, i) => (
          <div
            className={`SizeSelection__Size${i + 1}`}
            onClick={() => this.setSize(each, i + 1)}
            key={i}
            tabmydex={i + 1}
          >
            <span>{each}</span>
          </div>
        ))}
      </div>
    );
  };

  renderAddToCart = () => {
    return (
      <button type="button" className="SizeSelection__Button">
        ADD TO CART
      </button>
    );
  };

  render() {
    return (
      <div className="SizeSelection__Div">
        <div className="SizeSelection__Container">
          <h1 className="SizeSelection__H1">PRODUCT PRICE</h1>
          <div className="SizeSelection__P">Select Size</div>
          {this.renderCircles()}
          {this.renderAddToCart()}
        </div>
      </div>
    );
  }
}

export default SizeSelection;
