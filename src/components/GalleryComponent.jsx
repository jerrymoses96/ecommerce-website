import img1 from "../assets/galllery/img (1).jpg";
import img2 from "../assets/galllery/img (2).jpg";
import img3 from "../assets/galllery/img (3).jpg";
import img4 from "../assets/galllery/img (4).jpg";
import img5 from "../assets/galllery/img (5).jpg";
import img6 from "../assets/galllery/img (6).jpg";
import img7 from "../assets/galllery/img (7).jpg";
import img8 from "../assets/galllery/img (8).jpg";
import img9 from "../assets/galllery/img (9).jpg";
import img10 from "../assets/galllery/img (10).jpg";

const imagepath = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const GalleryComponent = () => {
  return (
    <div className="text-center">
      <h1 className="my-28 font-semibold text-3xl">Blockbuster Offers</h1>
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

export default GalleryComponent;
