import React, { useState } from "react";
import { ICON_URL, IMG_CDN_URL } from "../constant";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const OfferCarousel = ({ data }) => {
  // console.log(data);
  const [pageIndex, setPageIndex] = useState(1);
  const carouselData = data?.imageGridCards?.info;
  // console.log(carouselData.length);

  // const selectedPageHandler = (selectedPage) => {
  //   if (
  //     selectedPage >= 1 &&
  //     selectedPage !== pageIndex &&
  //     selectedPage <= carouselData.length
  //   )
  //     setPageIndex(selectedPage);
  //   console.log(selectedPage);
  // };
  return (
    <div className="flex flex-col px-2 ">
      <div className="flex justify-between text-black/80 items-center py-3">
        <h2 className="text-xl font-bold ">
          {data?.header?.title ? data?.header?.title : "Best offers for you"}
        </h2>
        {/* <div className="flex gap-3">
          <p
            className="border p-2 rounded-full cursor-pointer"
            onClick={() => selectedPageHandler(pageIndex - 1)}
          >
            <HiArrowLeft />
          </p>

          <p
            className="border p-2 rounded-full cursor-pointer"
            onClick={() => selectedPageHandler(pageIndex + 1)}
          >
            <HiArrowRight />
          </p>
        </div> */}
      </div>
      <div className="flex gap-10 overflow-auto scroll-smooth scrollbar">
        {carouselData &&
          carouselData.map((item) => {
            // console.log(item);

            let restaurantLinkRepresent = item?.action?.link.includes("/menu/");

            // --------------------   Get Entity Id From URL ------------------------

            const url = item?.entityId;
            let collectionId;

            // Function to extract collection_id
            function extractCollectionId(url) {
              // console.log(url);
              const match = url.match(/collection_id=(\d+)/) || url.length <= 5;
              // console.log(match);
              if (match && match[1]) {
                return match[1];
              }
              return url;
            }

            // Call the function to extract collection_id
            collectionId = extractCollectionId(url);
            return (
              // ----------  Check This Links  -------------------
              <Link
                key={item.id}
                to={
                  !restaurantLinkRepresent
                    ? `/collection/${collectionId}`
                    : `/restaurant/${collectionId}`
                  // `/restaurant/${item?.id}`
                }
              >
                <div className="flex xs:w-96 sm:w-[26rem]">
                  <img
                    className="rounded-2xl w-full mb-3 "
                    src={IMG_CDN_URL + item?.imageId}
                    alt={item?.accessibility?.altText}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default OfferCarousel;
