import React from "react";
import "./SingleProduct.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import defaultImage from "../../assets/logo/twitter.png";
import * as actionTypes from "../../store/actions";
import { connect } from "react-redux";

class SingleProduct extends React.Component {
  state = {
    counter : -1,
    babe: this.props.location.state.desc.baby,
    variants: this.props.location.state.desc.sizes,
    size: this.props.location.state.desc.sizes[0],
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
  selectMe=(index)=>{
    console.log(index)
    this.setState({counter:index});
  }
  setSize = (val, ind) => {
    for (let i = 0; i < this.state.variants.length; i++) {
      document.querySelector(
        `.SizeSelection__Size${i + 1}`
      ).style.backgroundColor = "transparent";
      document.querySelector(`.SizeSelection__Size${i + 1}`).style.color =
        "#7f7f7f";
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
          "#fff";
        document.querySelector(
          `.SizeSelection__Size${i + 1}`
        ).style.backgroundColor = "#7f7f7f";
      }
    }
    this.setState({
      size: val,
    });
  };

  renderCircles = (arr,stock) => {
    const database = {
      s: "9/12 Months",
      m: "12/18 Months",
      l: "18/24 Months",
      x: "2/3 Years",
      xl: "3/4 Years",
    };
    const agesSelect = [
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
    let counter=0;
    let temp=[];
    for(let j=0;j<arr.length;j++)
    {
      if(stock!==undefined && stock[arr[j]]>0 )
      temp.push((
        <div
        className={`${this.state.counter == j  ? 'selected' : ''} SizeSelection__Size`}
        onClick={() => this.selectMe(j)}
        key={j}
        tabmydex={j}
      >
        <span>
          {
            arr[j]
          }
        </span>
      </div>
      ))
    }
    return (
      <div className="SizeSelection__Helper">
        {
          temp
        }
       
      </div>
    );
  };

  render() {
    const data = this.props.location.state;

    return (
      <React.Fragment>
        <div className="Gallery__Container">
          <ImageGallery
            items={data.images.map((each) => {
              return { original: each, thumbnail: each };
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
            {data.desc.sizes.length === 0 ? null : (
              <React.Fragment>
                <div className="SizeSelection__P">Select Size</div>
                {this.renderCircles(data.desc.sizes,data.stock)}
              </React.Fragment>
            )}

            <button
              type="button"
              onClick={() => {
                if(data.stock!==undefined)
                {
                  if(Object.values(data.stock).reduce((a,b)=>a+b,0)>0)
                  {
                    this.props.onAddToCart({ qty: 1, data, size: this.state.size });
                    this.props.history.push("/cart");
                  }
                }
              }}
              className="SizeSelection__Button"
            >
              {data.stock!==undefined?Object.values(data.stock).reduce((a,b)=>a+b,0)>0?"Add to Cart":"Out of Stock":"Out of Stock"}
            </button>
          </div>
        </div>
        <div className="ProductDescription">
          <h1 className="ProductDescription__Heading">Product Description</h1>
          <p className="ProductDescription__Para">{data.desc.para}</p>
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
