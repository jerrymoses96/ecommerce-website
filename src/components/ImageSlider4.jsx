import ImageSlider from "./Slider";

const ImageSlider4 = () => {
  const otherImages = [
    "src/assets/minislider-4/img (1).jpg",
    "src/assets/minislider-4/img (2).jpg",
    "src/assets/minislider-4/img (3).jpg",
    "src/assets/minislider-4/img (4).jpg",
    "src/assets/minislider-4/img (5).jpg",
    "src/assets/minislider-4/img (6).jpg",
    "src/assets/minislider-4/img (7).jpg",
    "src/assets/minislider-4/img (8).jpg",
  ];

  return (
    <div>
      <ImageSlider images={otherImages} heading="Let The Game Begin" />
    </div>
  );
};

export default ImageSlider4;
