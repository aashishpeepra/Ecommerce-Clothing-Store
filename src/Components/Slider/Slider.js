import React from "react";
import "./Slider.css";
import {NavLink} from 'react-router-dom';

const Slide = (props) => {
  const styles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 60%",
  };
  return (
    <div className="slide" style={styles}>
      <div className="Slider__Content">
        <h1 className="Slider__Heading">{props.head}</h1>
        <div className="Slider__Paragraph">
          <p>{props.para}</p>
        </div>
        <button type="button" className="Slider__Button">
          <NavLink to="/shop" className="Slider__More">Show More</NavLink>
        </button>
      </div>
    </div>
  );
};

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          image:
            "https://images.vexels.com/media/users/3/152061/raw/17c7a23a045e30cbd8a8b7afd4c89d9b-shopping-discount-poster-design.jpg",
          head: "Slide1",
          para: "Para1",
        },
        {
          image:
            "https://i.pinimg.com/736x/36/89/69/3689696b4c3134364cda98a83be6b395.jpg",
          head: "Slide2",
          para: "Para2",
        },
        {
          image:
            "https://img.freepik.com/free-vector/woman-touching-add-cart-button-desktop-screen-with-trolley-carry-bags-parcel-boxes-blue-background-online-shopping-concept_1302-22611.jpg?size=626&ext=jpg",
          head: "Slide3",
          para: "Para3",
        },
      ],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.data.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s",
          }}
        >
          {this.state.data.map((each, i) => (
            <Slide
              key={i}
              image={each.image}
              head={each.head}
              para={each.para}
            />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}

const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      &lt;
    </div>
  );
};

const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      &gt;
    </div>
  );
};

export default Slider;
