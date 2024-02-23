import SimpleSlider from "./SimpleSlider";
import CategoryImages from "./CategoryImages";
import BannerImages from "./BannerImages";
import MultipleItems from "./MultipleItems";

const Body = () => {
  return (
    <div className="w-[100%]">
      <SimpleSlider />
      <CategoryImages />
      <BannerImages />
      <MultipleItems />
    </div>
  );
};

export default Body;
