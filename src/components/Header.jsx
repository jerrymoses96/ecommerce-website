import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex">
      <div className=" bg-slate-800 w-2/12 py-7 pl-14">
        <img
          className="w-16"
          alt="logo"
          src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png"
        />
      </div>
      <div className="w-10/12">
        <div className="bg-black text-white flex justify-between p-2 text-sm px-4">
          <p>Tata CLiQ Luxury </p>
          <div>
            <ul className="flex gap-6">
              <li>CLiq Cash</li>
              <li>Gift Card</li>
              <li>CLiQ Care</li>
              <li>Track Orders</li>
              <li>Sign in / Sign Up</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800 text-white flex py-4 justify-between px-4 items-center">
          <p className="flex items-center">
            Categories <IoIosArrowDown />
          </p>
          <p className="flex items-center">
            Brands <IoIosArrowDown />{" "}
          </p>
          <form action="/search" method="get">
            <input
              className="bg-gray-600 w-[600px] p-2 rounded-lg focus:bg-white text-black"
              type="search"
              name="q"
              placeholder="Search for brands"
              required
            />
          </form>
          <div className="flex gap-5    ">
            <CiHeart className="hover:scale-125" size={28} />
            <AiOutlineShoppingCart className="hover:scale-125" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
