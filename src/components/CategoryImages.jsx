import image1 from "/src/assets/grouped images/img (1).jpg";
import image2 from "/src/assets/grouped images/img (2).jpg";
import image3 from "/src/assets/grouped images/img (3).jpg";
import image4 from "/src/assets/grouped images/img (4).jpg";
import image5 from "/src/assets/grouped images/img (5).jpg";
import image6 from "/src/assets/grouped images/img (6).jpg";
import image7 from "/src/assets/grouped images/img (7).jpg";
import image8 from "/src/assets/grouped images/img (8).jpg";
import image9 from "/src/assets/grouped images/img (9).jpg";
import image10 from "/src/assets/grouped images/img (10).jpg";
import { Link } from "react-router-dom";

const imagepath = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const Category = [
  "westside",
  "womenswear",
  "menswear",
  "footwear",
  "watches",
  "bags",
  "home",
  "kids",
  "jewellery",
  "gadgets",
];

const CategoryImages = () => {
  return (
    <div className="flex mt-16 gap-2 justify-center ">
      {imagepath.map((image, index) => {
        return (
          <Link key={index} to={`/${Category[index]}`}>
            <img className="rounded-2xl h-[115px] cursor-pointer" src={image} />
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryImages;
