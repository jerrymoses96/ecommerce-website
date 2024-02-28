import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import { userContext } from "../App";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Kid's fashion",
    "Home & kitchen",
    "Beauty",
    "Gadgets",
    "Jewellery",
    "Accessories",
  ];

  const openDropdown = () => {
    setIsOpen(true);
    console.log("clicked");
  };
  const closeDropdown=()=>{
    setIsOpen(false);
  }
  const CartItems = useSelector((store) => store.cart.items);
  const { userdata, updateUserData } = useContext(userContext);
  const handleLogout = () => {
    updateUserData({ type: "LOGOUT" });
  };

  return (
    <div className="flex">
      <div className=" bg-slate-800 w-2/12 py-7 pl-14">
        <Link to="/">
          <img
            className="w-16"
            alt="logo"
            src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png"
          />
        </Link>
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

              {userdata ? (
                <li
                  className="border border-gray-100 rounded-md p-2 font-thin cursor-pointer"
                  onClick={() => handleLogout()}
                >
                  Logout
                </li>
              ) : (
                <Link to="/auth/login/">
                  <li className="border border-gray-100 rounded-md p-2 font-thin">
                    Login
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
        <div className="bg-slate-800 text-white flex py-4 justify-between px-4 items-center">
          <p
            className="flex items-center cursor-pointer p-3 px-4 hover:bg-white hover:text-black"
            onMouseOver={openDropdown}
            onMouseOut={closeDropdown}
          >
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
            <CiHeart
              className="hover:scale-125 transition-transform duration-200 ease-in-out"
              size={28}
            />
            <div className="relative hover:scale-110 transition-transform duration-200 ease-in-out">
              <Link to="/cart">
                <AiOutlineShoppingCart className="" size={24} />
              </Link>
              <p className="bg-red-700 rounded-full px-2 py-1 flex justify-center items-center absolute top-[-10px] left-[16px] text-xs ">
                {CartItems.length}
              </p>
            </div>
          </div>
          {/* Dropdown menu */}
          {isOpen && (
            <ul className=" absolute top-28 left-[226px] bg-white shadow-md  overflow-hidden w-96 z-50">
              {console.log("clicked 2")}
              {categories.map((category) => (
                <li
                  key={category}
                  className="hover:bg-gray-100 px-3 py-2 cursor-pointer text-black"
                >
                  {category}
                  {console.log(category)}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
