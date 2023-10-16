import React from "react";

const CarouselItemShimmer = () => {
  return (
    <div className="flex flex-col flex-wrap xs:px-8 ss:px-24 sm:px-4 md:px-16 lg:px-8 xl:px-16 rounded animate-pulse">
      <div className="mt-5 pl-5">
        <p className="w-64 h-8 bg-lightgray"></p>
        <p className="w-[30rem] h-4 my-3 bg-lightgray"></p>
      </div>
      <div className="flex flex-wrap mt-3">
        {Array(10)
          .fill("")
          .map((e, indx) => (
            <div className="m-2" key={indx}>
              <p className="w-72 h-40 bg-lightgray "></p>
              <p className="my-3 w-32 h-2 bg-lightgray "></p>
              <p className="my-3 w-24 h-2 bg-lightgray "></p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarouselItemShimmer;
