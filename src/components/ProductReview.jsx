import { useEffect, useState } from "react";
import { REVIEW_URL } from "../utils/constants";
import axios from "axios";
import { formatDate } from "../utils/DateConvertor";
import { IoMdStar } from "react-icons/io";

const ProductReview = ({ id }) => {
  const [review, setreview] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  console.log(id);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://www.tatacliq.com/mplratingreview/${id}/pdpReviews`
      );
      console.log(response.data);
      setreview(response.data.reviews);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(review);

  return (
    <div className="flex flex-col mx-auto gap-5  border border-gray-400 rounded-2xl p-10 mt-20 w-[1200px]">
      <p className="text-xl font-extrabold">RATINGS AND REVIEWS</p>
      {review.map((item) => (
        <div
          key={item.id}
          className="flex flex-col p-4 mb-2 border-b border-gray-300"
        >
          <div className="flex items-center justify-between mb-2">
            {/* {item.isBuyer && (
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2-2 4 4-2 2-4-4z"
                />
              </svg>
            )} */}
            <span className="text-gray-800 font-semibold">
              {item.userName || item.alias}
            </span>
            <span className="text-gray-600 ml-2 text-sm">
              {formatDate(item.date)}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-800 font-semibold flex items-center px-2  bg-green-100 rounded-2xl">
              {item.rating} <IoMdStar color="green" />{" "}
            </span>
            <p className="text-gray-700 ">{item.headline}</p>
          </div>

          <p className="text-gray-900 mt-2 font-thin">{item.comment}</p>

          {/* Additional details section (replace with your content) */}
          <div className="mt-4 flex flex-wrap">{/* ... */}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductReview;
