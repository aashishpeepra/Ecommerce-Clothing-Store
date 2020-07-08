import React from "react";
import "./SingleProduct.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import defaultImage from "../../assets/logo/twitter.png";

class SizeSelection extends React.Component {
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

  render() {
    return (
      
      <React.Fragment>
        <div className="Gallery__Container">
          <ImageGallery
            items={this.state.images}
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
            <h1 className="SizeSelection__H1">PRODUCT PRICE</h1>
            <div className="SizeSelection__P">Select Size</div>
            {this.renderCircles()}
            <button type="button" className="SizeSelection__Button">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="ProductDescription">
          <h1 className="ProductDescription__Heading">Product Description</h1>
          <p className="ProductDescription__Para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            suscipit est quis, quae obcaecati quisquam minima inventore a
            tempore fugiat magni illum quia totam praesentium, omnis sequi
            commodi eius cupiditate. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quasi suscipit est quis, quae obcaecati quisquam
            minima inventore a tempore fugiat magni illum quia totam
            praesentium, omnis sequi commodi eius cupiditate.
          </p>
          <div className="ProductDescription__Table">
            <div className="ProductDescription__Fixed">
              <div>Material</div>
              <div>Mfg. Date</div>
              <div>Gender</div>
            </div>
            <div className="ProductDescription__Dynamic">
              <div>Cotton</div>
              <div>12-05-2020</div>
              <div>F</div>
            </div>
          </div>
        </div>
      </React.Fragment>
      
    );
  }
}

export default SizeSelection;
