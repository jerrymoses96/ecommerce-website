import { useEffect, useState } from "react";
import { REVIEW_URL } from "../utils/constants";
import axios from "axios";
import { formatDate } from "../utils/DateConvertor";
import { IoMdStar } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { HiCheck } from "react-icons/hi2";

const ProductReview = ({ id }) => {
  const [review, setreview] = useState([]);
  const [mainData, setmainData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   getReviewData();
  // }, []);

  // const getReviewData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.tatacliq.com/mplratingreview/${id}/ratingSummary`
  //     );
  //     console.log(response.data);
  //     // setrating(response.data.)
  //   } catch (error) {
  //     console.error("error fetching data :", error);
  //   }
  // };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://www.tatacliq.com/mplratingreview/${id}/pdpReviews`
      );
      console.log(response.data);
      setreview(response.data.reviews);
      setmainData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Calculate the total number of ratings and the sum of ratings
  const totalNumberOfRatings = mainData?.totalCountOfEachStarRating?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalRatingCount,
    0
  );

  const sumOfRatings = mainData?.totalCountOfEachStarRating?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.starRating * currentValue.totalRatingCount,
    0
  );

  // Calculate the average rating
  const averageRating = sumOfRatings / totalNumberOfRatings;

  console.log(review);
  console.log(mainData);

  return (
    <div className="flex flex-col mx-auto gap-5  border border-gray-400 rounded-2xl p-10 mt-20 w-[1200px]">
      <p className="text-xl font-extrabold">RATINGS AND REVIEWS</p>
      <div className="flex border-b border-gray-300 py-10">
        <div className="w-1/4 border-r border-gray-300 flex justify-center">
          <div className="text-center">
            <p className="flex items-center text-5xl font-semibold mb-2">
              {averageRating.toFixed(1)}
              <IoMdStar color="green" size={48} />
            </p>
            <p className="text-green-700 font-medium">
              {totalNumberOfRatings}{" "}
              <span className="text-green-700 font-light">Ratings</span>
            </p>
            <p className="text-green-700 font-light">
              &{" "}
              <span className="text-green-700 font-medium">
                {mainData.totalNoOfReviews}
              </span>{" "}
              Reviews
            </p>
          </div>
        </div>
        <div className="w-1/4 border-r border-gray-300 px-10">
          {mainData?.totalCountOfEachStarRating?.map((item, index) => {
            const barWidth = `${
              (item.totalRatingCount /
                Math.max(
                  ...mainData.totalCountOfEachStarRating.map(
                    (d) => d.totalRatingCount
                  )
                )) *
              100
            }%`;
            return (
              <div key={index} className="flex gap-5 items-center">
                <span className="flex items-center font-light">
                  {item.starRating}
                  <IoMdStar size={14} />
                </span>
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden w-full">
                  <div
                    className={`bg-green-600 h-full`}
                    style={{ width: barWidth }}
                  />
                </div>
                <span className="text-green-800 font-light text-sm">
                  {item.totalRatingCount}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 w-2/4 flex-wrap items-center px-10">
          {mainData?.parameterizedRating?.map((item) => {
            return (
              <div
                className="border border-green-400 rounded-md px-1 h-[30px] flex items-center "
                key={item.parameterName}
              >
                <div className="h-[17px] bg-green-700 w-1 rounded-lg mr-1"></div>
                <span className="font-semibold text-green-900">
                  {item.parameterAvgRating}
                </span>
                <span className="text-green-800 font-light mr-1">/5</span>
                <span className="text-green-800 font-light text-sm ">
                  {item.parameterName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {review.map((item) => (
        <div
          key={item.id}
          className="flex flex-col p-4 mb-2 border-b border-gray-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2 items-center">
              <CiUser />
              <span className="text-gray-800 font-semibold">
                {item.userName || item.alias}
              </span>
              {item.isBuyer && (
                <span className="font-thin text-sm flex items-center gap-1 ml-2 ">
                  <HiCheck className="bg-green-100 rounded-xl" />
                  Verified buyer
                </span>
              )}
            </div>
            <span className="text-gray-600 ml-2 text-sm">
              {formatDate(item.date)}
            </span>
          </div>
          <div className="flex items-center gap-3 mb-2">
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
