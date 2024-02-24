import ImageSlider from "./Slider";

const ImageSlider5 = () => {
  const otherImages = [
    "src/assets/minislider-5/img (1).jpg",
    "src/assets/minislider-5/img (2).jpg",
    "src/assets/minislider-5/img (3).jpg",
    "src/assets/minislider-5/img (4).jpg",
    "src/assets/minislider-5/img (5).jpg",
  ];

  return (
    <div>
      <ImageSlider images={otherImages} heading="Offers For Juniors" />
    </div>
  );
};

export default ImageSlider5;
