import ImageSlider from "./Slider";

const ImageSlider3 = () => {
  const otherImages = [
    "src/assets/minislider-3/img (1).jpg",
    "src/assets/minislider-3/img (2).jpg",
    "src/assets/minislider-3/img (3).jpg",
    "src/assets/minislider-3/img (4).jpg",
    "src/assets/minislider-3/img (5).jpg",
    "src/assets/minislider-3/img (6).jpg",
    "src/assets/minislider-3/img (7).jpg",
  ];

  return (
    <div>
      <ImageSlider images={otherImages} heading="Westside Watchlist" />
    </div>
  );
};

export default ImageSlider3;
