import ImageSlider from "./Slider";

const ImageSlider6 = () => {
  const otherImages = [
    "src/assets/minislider-6/img (1).jpg",
    "src/assets/minislider-6/img (2).jpg",
    "src/assets/minislider-6/img (3).jpg",
    "src/assets/minislider-6/img (4).jpg",
    "src/assets/minislider-6/img (5).jpg",
    "src/assets/minislider-6/img (6).jpg",
  ];

  return (
    <div>
      <ImageSlider images={otherImages} heading="The Beauty Buzz" />
    </div>
  );
};

export default ImageSlider6;
