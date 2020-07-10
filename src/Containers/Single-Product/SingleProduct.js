import React from "react";
import "./SingleProduct.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import defaultImage from "../../assets/logo/twitter.png";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";

class SingleProduct extends React.Component {
  state = {
    variants: ["S", "M", "L", "X"],
    size: "S",
    images: [
      {
        original: "http://lorempixel.com/1000/600/nature/1/",
        thumbnail: "http://lorempixel.com/250/150/nature/1/",
      },
      {
        original: "http://lorempixel.com/1000/600/nature/2/",
        thumbnail: "http://lorempixel.com/250/150/nature/2/",
      },
      {
        original: "http://lorempixel.com/1000/600/nature/3/",
        thumbnail: "http://lorempixel.com/250/150/nature/3/",
      },
    ],
  };

  setSize = (val, ind,arr) => {
    for (let i = 0; i < arr.length; i++) {
      document.querySelector(
        `.SizeSelection__Size${i + 1}`
      ).style.backgroundColor = "transparent";
      document.querySelector(`.SizeSelection__Size${i + 1}`).style.color =
        "white";
    }
    for (let i = 0; i < arr.length; i++) {
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

  renderCircles = (arr) => {
    return (
      <div className="SizeSelection__Helper">
        {arr.map((each, i) => (
          <div
            className={`SizeSelection__Size${i + 1}`}
            onClick={() => this.setSize(each, i + 1,arr)}
            key={i}
            tabmydex={i + 1}
          >
            <span>{each}</span>
          </div>
        ))}
      </div>
    );
  };

  render() {
    const data = this.props.location.state;
    console.log(data)
    return (

      <React.Fragment>

        <div className="Gallery__Container">

          <ImageGallery
            items={data.images.map(each=>{
              return {original:each,thumbnail:each}
            })}
            defaultImage={defaultImage}
            showBullets={true}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
            autoplay={true}
            showFullscreenButton={false}
          />
        </div>
        <div className="SizeSelection__Div">
          <div className="SizeSelection__Container">
            <h1 className="SizeSelection__H1">{data.title}</h1>
            <div className="SizeSelection__P">{"Rs." + data.price}</div>
            <div className="SizeSelection__P">Select Size</div>
            {this.renderCircles(data.desc.sizes)}
            <button type="button" onClick={()=>{this.props.onAddToCart(data);this.props.history.push("/cart")}} className="SizeSelection__Button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="ProductDescription">
          <h1 className="ProductDescription__Heading">Product Description</h1>
          <p className="ProductDescription__Para">

          </p>
          <div className="ProductDescription__Table">
            <div className="ProductDescription__Fixed">
              <div>Material</div>
              <div>Mfg. Date</div>
              <div>Gender</div>
            </div>
            <div className="ProductDescription__Dynamic">
              <div>{data.desc.material}</div>
              <div>12-05-2020</div>
              <div>{data.desc.gender.toUpperCase()}</div>
            </div>
          </div>
        </div>
      </React.Fragment>

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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
