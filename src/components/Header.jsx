import { IoIosArrowDown } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { userContext } from "../App";

const Header = () => {
  const CartItems = useSelector((store) => store.cart.items);
  const { userdata, updateUserData } = useContext(userContext);
  const handleLogout = () => {
    updateUserData({ type: "LOGOUT" });
  };

  return (
    <div className="flex sticky top-0">
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
        </div>
      </div>
    </div>
  );
};

export default Header;
