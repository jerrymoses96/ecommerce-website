import { useContext, useEffect, useState } from "react";
import { React, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import { IoMdStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CartSlice";
import { toast } from "react-toastify";
import { SearchContext } from "../App";
import { useNavigate } from "react-router";

const SearchComponent = () => {

  

  const { searchText } = useContext(SearchContext);
  console.log(searchText);


  const [maindata, setMaindata] = useState([]);

  const dispatch = useDispatch();

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

  useEffect(() => {
    const timer = setTimeout(() => {
      getData();
    }, 500); // Adjust the debounce time as needed (e.g., 500 milliseconds)

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getData = ( async () => {
    try {
      const response = await fetch(
        `https://searchbff.tatacliq.com/products/mpl/search?searchText=${searchText}%3Arelevance%3AinStockFlag%3Atrue&isKeywordRedirect=false&isKeywordRedirectEnabled=true&channel=WEB&isMDE=true&isTextSearch=false&isFilter=false&qc=false&test=invizbff.rankingv2-inviz.ab&page=0&mcvid=69345940182409349343281789800981913985&customerId=&isSuggested=false&isPwa=true&pageSize=40&typeID=all`
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
  });

  return (
    <div className="flex flex-wrap gap-5 p-10 justify-center">
      {maindata?.length >= 1 ? (
        maindata.map((item, index) => {
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
              <Slider
                dots={false}
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                prevArrow={
                  <div className="slick-arrow slick-prev">Previous</div>
                }
                nextArrow={<div className="slick-arrow slick-next">Next</div>}
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
  );
};

export default SearchComponent;
