import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PhotoGallery.css'

const PhotoGallery = (props) => {
  const settings = {
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinte: true,
  };
  return (
    <div>
      <Slider {...settings}>
        {props.images.map((image) => {
          return(
            <div className="image">
              <div className="frame" style ={ { backgroundImage: "url("+image.url+")" } }>
                <span>{image.caption}</span>
              </div>
          </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default PhotoGallery

