import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
        className="text-zinc-800 bg-gray-200 rounded-l-full absolute top-[-190px] left-[950px] "
      />
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
        className="text-black bg-gray-200 rounded-r-full absolute top-[-190px] right-[40px]"
      />
    </div>
  );
};

const ImageSlider = ({ images,heading }) => {
  console.log(heading);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="slider-container text-center w-[80%] mx-auto  ">
    <h1 className="my-28 font-semibold text-3xl">{heading}</h1>  
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="p-4 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
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
};

export default ImageSlider;
