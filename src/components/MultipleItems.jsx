import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // Import icons from React Icons
import img1 from "../assets/offer section/img (1).jpg";
import img2 from "../assets/offer section/img (2).jpg";
import img3 from "../assets/offer section/img (3).jpg";
import img4 from "../assets/offer section/img (4).jpg";
import img5 from "../assets/offer section/img (5).jpg";
import img6 from "../assets/offer section/img (6).jpg";
import img7 from "../assets/offer section/img (7).jpg";

// Custom arrow component
const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FiChevronLeft
        size={30}
        color="black"
        className="text-black bg-gray-300 rounded-l-full absolute top-[-190px] left-[950px] "
      />{" "}
      {/* Using FiChevronLeft icon */}
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FiChevronRight
        size={30}
        color="black"
        className="text-black bg-gray-300 rounded-r-full absolute top-[-190px] right-[40px]"
      />{" "}
      {/* Using FiChevronRight icon */}
    </div>
  );
};

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  // Array of image paths
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="slider-container text-center w-[80%] mx-auto  ">
      <h1 className="my-28">delicious</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <img
              className="rounded-3xl shadow-lg"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MultipleItems;
