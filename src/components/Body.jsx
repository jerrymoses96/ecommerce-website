import SimpleSlider from "./SimpleSlider";
import CategoryImages from "./CategoryImages";
import BannerImages from "./BannerImages";
import GalleryComponent from "./GalleryComponent";
import GalleryComponent2 from "./GalleryComponent2";
import ImageSlider2 from "./ImageSlider2";
import ImageSlider1 from "./ImageSlider1";
import ImageSlider3 from "./ImageSlider3";
import ImageSlider4 from "./ImageSlider4";
import ImageSlider5 from "./ImageSlider5";
import ImageSlider6 from "./ImageSlider6";
import ImageSlider7 from "./ImageSlider7";
import "../index.css";
import SafetyWarning from "./SafetyWarning";

const Body = () => {
  return (
    <div className=" body-style w-[100%] pb-4">
      <SimpleSlider />
      <CategoryImages />
      <BannerImages />
      <ImageSlider1 />

      <GalleryComponent />
      <GalleryComponent2 />
      <ImageSlider2 />
      <ImageSlider3 />
      <ImageSlider4 />
      <ImageSlider5 />
      <ImageSlider6 />
      <ImageSlider7 />
      <SafetyWarning />
    </div>
  );
};

export default Body;
