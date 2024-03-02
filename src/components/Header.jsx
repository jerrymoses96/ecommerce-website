import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { animated, useSpring } from "react-spring";
import { SearchContext, userContext } from "../App";
import { categories, brands } from "../utils/constants";
import { toast } from "react-toastify";


const Header = () => {
  // State variables
  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [isOpenBrands, setIsOpenBrands] = useState(false);

  // Hooks
  const navigate = useNavigate();
  const { searchText, handleSearchChange } = useContext(SearchContext);
  const CartItems = useSelector((store) => store.cart.items);
  const { userdata, updateUserData } = useContext(userContext);

  // Animated spring for dropdown animation
  const animation = useSpring({
    from: { maxHeight: isOpenCategories || isOpenBrands ? 800 : 0 },
    to: { maxHeight: isOpenCategories || isOpenBrands ? 800 : 0 },
    config: { duration: 200 },
  });

  // Event handlers
  const handleInputChange = (event) => {
    const { value } = event.target;
    handleSearchChange(value);
    navigate(value ? "/search" : "/");
  };

  const toggleDropdown = () => {
    setIsOpenCategories(!isOpenCategories);
    setIsOpenBrands(false);
  };

  const toggleDropdownBrands = () => {
    setIsOpenBrands(!isOpenBrands);
    setIsOpenCategories(false);
  };

  const handleLogout = () => {
    updateUserData({ type: "LOGOUT" });
    toast.success(`logged out of your account!`, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex">
      {/* Logo */}
      <div className="bg-slate-800 w-2/12 py-7 pl-14">
        <Link to="/">
          <img
            className="w-16"
            alt="logo"
            src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-White.png"
          />
        </Link>
      </div>

      {/* Header Content */}
      <div className="w-10/12">
        {/* Upper Navigation */}
        <div className="bg-black text-white flex justify-between p-2 text-sm px-4">
          <p>Tata CLiQ Luxury</p>
          <div>
            <ul className="flex gap-6">
              <li>CLiq Cash</li>
              <li>Gift Card</li>
              <li>CLiQ Care</li>
              <Link to="/orderdetails">
                <li>Track Orders</li>
              </Link>
              {userdata ? (
                <li
                  className="border border-gray-100 rounded-md p-2 font-thin cursor-pointer"
                  onClick={()=>handleLogout()}
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

        {/* Lower Navigation */}
        <div className="bg-slate-800 text-white flex py-4 justify-between px-4 items-center">
          {/* Categories Dropdown */}
          <p
            className="flex items-center cursor-pointer p-3 px-4"
            onClick={toggleDropdown}
          >
            Categories{isOpenCategories ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </p>

          {/* Brands Dropdown */}
          <p
            className="flex items-center cursor-pointer"
            onClick={toggleDropdownBrands}
          >
            Brands{isOpenBrands ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </p>

          {/* Search Input */}
          <input
            value={searchText}
            onChange={handleInputChange}
            type="search"
            className="bg-gray-600 w-[600px] p-2 rounded-lg focus:bg-white text-black"
            placeholder="Search for brands"
            required
          />

          {/* Cart and Favorites */}
          <div className="flex gap-5">
            <CiHeart
              className="hover:scale-125 transition-transform duration-200 ease-in-out"
              size={28}
            />
            <div className="relative hover:scale-110 transition-transform duration-200 ease-in-out">
              <Link to="/cart">
                <AiOutlineShoppingCart className="" size={24} />
              </Link>
              <p className="bg-red-700 rounded-full px-2 py-1 flex justify-center items-center absolute top-[-10px] left-[16px] text-xs">
                {CartItems.length}
              </p>
            </div>
          </div>

          {/* Dropdown menus */}
          {isOpenCategories && (
            <animated.ul
              style={animation}
              className="absolute top-32 left-[226px] bg-white shadow-md shadow-zinc-600 rounded-xl overflow-hidden w-[500px] z-50"
            >
              {categories.map((category) => (
                <li
                  key={category}
                  className="hover:bg-gray-100 px-3 py-4 text-center font-bold border border-b cursor-pointer text-black"
                >
                  {category}
                </li>
              ))}
            </animated.ul>
          )}

          {isOpenBrands && (
            <animated.ul
              style={animation}
              className="absolute top-32 left-[226px] bg-white shadow-md shadow-zinc-600 rounded-xl overflow-hidden w-[500px] z-50"
            >
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="hover:bg-gray-100 px-3 py-4 text-center font-bold border border-b cursor-pointer text-black"
                >
                  {brand}
                </li>
              ))}
            </animated.ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
