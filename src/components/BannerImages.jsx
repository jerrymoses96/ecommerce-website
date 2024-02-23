import img1 from "../assets/banner/img (1).jpg";
import img2 from "../assets/banner/img (2).jpg";
import img3 from "../assets/banner/img (3).jpg";
import img4 from "../assets/banner/img (4).jpg";
import img5 from "../assets/banner/img (5).jpg";

const imagepath = [img1, img2, img3, img4, img5];

const BannerImages = () => {
  return (
    <div className="flex justify-center mt-10 gap-2">
      {imagepath.map((image, index) => {
        return <img className="w-60 cursor-pointer" key={index} src={image} />;
      })}
    </div>
  );
};

export default BannerImages;
