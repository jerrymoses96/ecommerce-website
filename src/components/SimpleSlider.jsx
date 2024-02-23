import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import image1 from "/src/assets/1.jpg";
import image2 from "/src/assets/2.jpg";
import image3 from "/src/assets/3.jpg";
import image4 from "/src/assets/4.jpg";
import image5 from "/src/assets/5.jpg";
import image6 from "/src/assets/6.jpg";
import "../index.css";

import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <h3>
            <img src={image1} />
          </h3>
        </div>
        <div>
          <h3>
            <img src={image2} />
          </h3>
        </div>
        <div>
          <h3>
            <img src={image3} />
          </h3>
        </div>
        <div>
          <h3>
            <img src={image4} />
          </h3>
        </div>
        <div>
          <h3>
            <img src={image5} />
          </h3>
        </div>
        <div>
          <h3>
            <img src={image6} />
          </h3>
        </div>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={style}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`}
      style={style}
      onClick={onClick}
    ></div>
  );
}

export default SimpleSlider;
