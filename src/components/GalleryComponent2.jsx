import img1 from "../assets/gallery2/img (1).jpg";
import img2 from "../assets/gallery2/img (2).jpg";
import img3 from "../assets/gallery2/img (3).jpg";
import img4 from "../assets/gallery2/img (4).jpg";
import img5 from "../assets/gallery2/img (5).jpg";
import img6 from "../assets/gallery2/img (6).jpg";

const imagepath = [img1, img2, img3, img4, img5, img6];

const GalleryComponent2 = () => {
  return (
    <div className="text-center">
      <h1 className="my-24 font-semibold text-3xl">
        {" "}
        Big Brands, Bigger Discounts
      </h1>
      <div className="flex flex-wrap justify-center gap-5 ">
        {imagepath.map((img, i) => {
          return (
            <img
              className="w-[485px] mb-10 hover:scale-[1.03] transition-transform duration-200"
              key={i}
              src={img}
              alt="img"
            />
          );
        })}
      </div>
    </div>
  );
};

export default GalleryComponent2;
