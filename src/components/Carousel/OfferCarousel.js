import React, { useState } from "react";
import { ICON_URL, IMG_CDN_URL } from "../Constant";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const OfferCarousel = ({ data }) => {
  // console.log(data);
  const [page, setPage] = useState(1);
  const carouselData = data?.imageGridCards?.info;
  // console.log(carouselData);
  return (
    <div className="flex flex-col px-2 mx-20">
      <div className="flex justify-between text-black/80 items-center py-3">
        <h2 className="text-xl font-bold ">
          {data?.header?.title ? data?.header?.title : "Best offers for you"}
        </h2>
        {/* <div className="flex gap-3">
          <p className="border p-2 rounded-full cursor-pointer">
            <HiArrowLeft />
          </p>

          <p className="border p-2 rounded-full cursor-pointer">
            <HiArrowRight />
          </p>
        </div> */}
      </div>
      <div className="flex gap-10 overflow-auto scroll-smooth scrollbar">
        {carouselData &&
          carouselData.map((item) => {
            //   console.log(item);
            return (
              // <div className="flex">
              //   <Link to={`/restaurant/${item?.entityId}`}>
              <img
                key={item.id}
                className="rounded-2xl xs:w-96 sm:w-[26rem] mb-3 cursor-not-allowed"
                src={IMG_CDN_URL + item?.imageId}
                alt={item?.accessibility?.altText}
              />
              //  </Link>
              // </div>
            );
          })}
      </div>
    </div>
  );
};

export default OfferCarousel;
