import React from "react";
import "./Slider.css";

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
          Show More
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
            "https://i.ytimg.com/vi/_xftI5rqCJ8/maxresdefault.jpg",
          head: "Slide1",
          para: "Para1",
        },
        {
          image:
            "https://i.pinimg.com/originals/3c/6e/db/3c6edbec33cb5ed160476517a42129d7.jpg",
          head: "Slide2",
          para: "Para2",
        },
        {
          image:
            "https://images.creativemarket.com/0.1.0/ps/5532777/1820/1214/m1/fpnw/wm0/horizontal-fashion-flyer-.png?1544451625&s=fdc03175e9eb3a9ce6561da8d4540280",
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
