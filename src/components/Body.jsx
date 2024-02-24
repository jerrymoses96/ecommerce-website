import SimpleSlider from "./SimpleSlider";
import CategoryImages from "./CategoryImages";
import BannerImages from "./BannerImages";
import GalleryComponent from "./GalleryComponent";
import GalleryComponent2 from "./GalleryComponent2";
import ImageSlider2 from "./ImageSlider2";
import ImageSlider1 from "./ImageSlider1";

const Body = () => {
  return (
    <div className="w-[100%]">
      <SimpleSlider />
      <CategoryImages />
      <BannerImages />
      <ImageSlider1 />

      <GalleryComponent />
      <GalleryComponent2 />
      <ImageSlider2 />
    </div>
  );
};

export default Body;
