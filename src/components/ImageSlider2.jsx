import ImageSlider from "./Slider";


const ImageSlider2 = () => {

  const otherImages = [
    "src/assets/latest drops/img (1).jpg",
    "src/assets/latest drops/img (2).jpg",
    "src/assets/latest drops/img (3).jpg",
    "src/assets/latest drops/img (4).jpg",
    "src/assets/latest drops/img (5).jpg",
    "src/assets/latest drops/img (6).jpg",

  ];
  return (
    <div>
      <ImageSlider images={otherImages} heading="Latest Drops" />


    </div>
  )
}

export default ImageSlider2;