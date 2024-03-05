import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { PRODUCT_URL } from "../utils/constants";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";
import Shimmer from "../utils/Shimmer";
import { toast } from "react-toastify";
import ProductReview from "./ProductReview";

const ViewProduct = () => {
  const [itemdata, setItemData] = useState([]);
  const [filterdata, setFilterData] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleclick = () => {
    dispatch(addItems(filterdata[0]));
    toast.success(`"${filterdata[0].productTitle}" added to your cart!`, {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(PRODUCT_URL);
        setItemData(response.data.searchresult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means it only runs once after the initial render

  useEffect(() => {
    if (itemdata.length > 0) {
      const filteredData = itemdata.filter((item) => item.ussid === id);
      setFilterData(filteredData);
    }
  }, [itemdata, id]); // Whenever itemdata or id changes, this effect runs

  console.log(filterdata);

  return (
    
    <div className="pt-20 pb-56">
      {filterdata.length === 1 ? (
        <div>
        <div className="flex justify-center items-center gap-20">
          <div className="flex flex-col gap-7">
            <img
              className=" h-[350px] w-[500px] object-cover border border-2-orange shadow-lg shadow-gray-300 rounded-xl transition-transform duration-300 transform hover:scale-105 hover:border-orange-700  "
              src={filterdata[0].imageURL}
              alt="title"
            />
            <div className="flex justify-between">
              {filterdata[0]?.productImages.slice(1, 5).map((image, index) => (
                <img
                  key={index}
                  className="w-24 h-24 object-cover shadow-xl rounded-2xl border transition-transform duration-300 transform hover:scale-110 hover:border-orange-700  "
                  src={image}
                  alt={`Product Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="p-4 w-[400px]">
            <h3 className="text-xl font-medium text-orange-500 mb-5">
              {filterdata[0].brandname}
            </h3>
            <p className="text-slate-800 mb-7 font-extrabold text-2xl">
              {filterdata[0].productname}
            </p>
            <div className="flex gap-3 items-center mb-1">
              <p className="font-semibold text-xl">
                {filterdata[0].price.sellingPrice.formattedValue}
              </p>
              <p className="bg-orange-100 text-orange-500 font-semibold rounded-md px-2">
                {filterdata[0].discountPercent}%
              </p>
            </div>
            <p className="line-through text-gray-400 font-normal mb-7">
              {filterdata[0].price.mrpPrice.formattedValue}
            </p>
            <button
              onClick={handleclick}
              className="px-6 py-2 text-white bg-orange-500 rounded-md flex items-center gap-3 hover:bg-orange-700 "
            >
              <GiShoppingCart size={20} />
              Add to cart
            </button>
          </div>
        </div>
        <div>
          <ProductReview id={filterdata[0].productId} />
        </div>
        </div>
        
      ) : (
        <Shimmer />
      )}
    </div>
    
  );
};

export default ViewProduct;
