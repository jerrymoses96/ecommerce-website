import ImageSlider from "./Slider";

const ImageSlider1 = () => {
  const otherImages = [
    "src/assets/offer section/img (1).jpg",
    "src/assets/offer section/img (2).jpg",
    "src/assets/offer section/img (3).jpg",
    "src/assets/offer section/img (4).jpg",
    "src/assets/offer section/img (5).jpg",
    "src/assets/offer section/img (6).jpg",
    "src/assets/offer section/img (7).jpg",
  ];

  return (
    <div>
      <ImageSlider images={otherImages} heading="deal-icious Offers" />
    </div>
  );
};

export default ImageSlider1;
