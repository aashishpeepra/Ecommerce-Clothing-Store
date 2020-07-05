import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ImageGallery.css";

import defaultImage from "../../assets/logo/twitter.png";

class Gallery extends React.Component {

  render() {
    const images = [
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
    ];

    return (
      <div className="Gallery__Container">
        <ImageGallery
          items={images}
          defaultImage={defaultImage}
          showBullets={true}
          showThumbnails={true}
          lazyLoad={true}
          showPlayButton={false}
          autoplay={true}
          showFullscreenButton={false}
        />
      </div>
    );
  }
}

export default Gallery;
