import ImageSlider from "./Slider";

const ImageSlider7 = () => {
  const otherImages = [
    "src/assets/minislider-7/img (1).jpg",
    "src/assets/minislider-7/img (2).jpg",
    "src/assets/minislider-7/img (3).jpg",
    "src/assets/minislider-7/img (4).jpg",
    "src/assets/minislider-7/img (5).jpg",
    "src/assets/minislider-7/img (6).jpg",
  ];

  return (
    <div>
      <ImageSlider images={otherImages} heading="Unbox Gadget Deals" />
    </div>
  );
};

export default ImageSlider7;
