import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import PropTypes from "prop-types";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CategoryProducts = ({ id }) => {
  const [maindata, setMaindata] = useState([]);
  const [selectedSort, setSelectedSort] = useState("relevance");

  const dispatch = useDispatch();

  const [sortOptions, setSortOptions] = useState([
    { value: "relevance", label: "Relevance" },
    { value: "priceLowToHigh", label: "Price (Low to High)" },
    { value: "priceHighToLow", label: "Price (High to Low)" },

    { value: "discounts", label: "Discounts" },
  ]);

  const sortProducts = (data, sortBy) => {
    switch (sortBy) {
      case "priceLowToHigh":
        return data.sort(
          (a, b) =>
            a.price.sellingPrice.doubleValue - b.price.sellingPrice.doubleValue
        );
      case "priceHighToLow":
        return data.sort(
          (a, b) =>
            b.price.sellingPrice.doubleValue - a.price.sellingPrice.doubleValue
        );

      case "discounts": // Assuming a discount percentage property
        return data.sort((a, b) => b.discountPercent - a.discountPercent);
      default:
        return data; // Default to relevance sorting
    }
  };

  const handleClick = (item) => {
    dispatch(addItems(item));
    toast.success(`"${item.productTitle}" added to your cart!`, {
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

  // sort functionality
  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  useEffect(() => {
    getData();
  }, []);
  CategoryProducts.propTypes = {
    id: PropTypes.string.isRequired, // Example: You can adjust the prop type according to your requirement
  };

  const getData = async () => {
    try {
      const response = await fetch(
        `https://searchbff.tatacliq.com/products/mpl/search?searchText=%3Arelevance%3Acategory%3AMSH${id}%3AinStockFlag%3Atrue%3AdiscountAll%3ADiscounted%20Items&isKeywordRedirect=true&isKeywordRedirectEnabled=false&channel=WE`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data.searchresult);
      setMaindata(data.searchresult);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="self-end pt-10 pr-10">
        <label htmlFor="sort" className="text-gray-700 mb-2 mr-2 font-light">
          Sort by:
        </label>
        <select
          id="sort"
          name="Sort"
          value={selectedSort}
          onChange={handleSortChange}
          className="bg-gray-50 border font-thin border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:ring-width-1 pl-3 pr-10 py-2"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap gap-5 p-10 justify-center">
        {maindata.length > 0 ? (
          sortProducts(maindata.slice(), selectedSort).map((item, index) => {
            const {
              productImages,
              productTitle,
              price,
              inStockFlag,
              averageRating,
              ratingCount,
              productNudgeMessage,
            } = item;

            return (
              <div
                key={index}
                className="border  w-[220px] rounded-2xl card-container hover:shadow-xl"
              >
                <Link to={`/viewproduct/${item.ussid}`}>
                  <Slider
                    dots={false}
                    infinite
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    prevArrow={
                      <div className="slick-arrow slick-prev">Previous</div>
                    }
                    nextArrow={
                      <div className="slick-arrow slick-next">Next</div>
                    }
                  >
                    {productImages.map((image, i) => (
                      <div key={i}>
                        <img
                          className="rounded-t-2xl   "
                          src={image}
                          alt={productTitle}
                        />
                      </div>
                    ))}
                  </Slider>
                </Link>
                <div className="p-2">
                  <p className="font-bold text-base">{item.brandname}</p>
                  <p className="font-thin text-sm h-16">{productTitle}</p>
                  <div className="flex mt-5 mb-1 items-baseline gap-1">
                    <p className="font-bold text-sm">
                      {price.sellingPrice.formattedValueNoDecimal}
                    </p>
                    <p className="text-xs text-gray-400 line-through font-semibold ">
                      {price.mrpPrice.formattedValueNoDecimal}
                    </p>
                    <p className="text-green-600 text-sm">
                      {item.discountPercent}% off
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="text-sm border border-b rounded-lg px-2 flex items-center  ">
                      {averageRating && averageRating.toFixed(1)}{" "}
                      {averageRating && <IoMdStar color="green" />}
                    </div>
                    <span className="text-sm text-slate-500">
                      {averageRating && `(${ratingCount})`}
                    </span>
                  </div>

                  <div className="text-center">
                    <button
                      className="border-2 bg-black  text-white w-[100%] rounded-xl text-base font-extralight py-3"
                      onClick={() => handleClick(item)}
                    >
                      ADD TO CART
                    </button>
                  </div>
                  <p className="text-orange-700 font-normal text-center">
                    {productNudgeMessage.length > 0 && "Limited stock!"}
                  </p>
                </div>
              </div>

              //
            );
          })
        ) : (
          <div>
            <iframe
              src="https://giphy.com/embed/ZO9b1ntYVJmjZlsWlm"
              width="480"
              height="360"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
