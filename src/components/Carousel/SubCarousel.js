import React from "react";
import { ICON_URL } from "../Constant";

const SubCarousel = ({ data }) => {
  return (
    <div className="mx-20 py-3">
      <h2 className="xs:text-[1.1rem] sm:text-xl font-bold text-black/80">
        {data?.header?.title}
      </h2>
      <div className="flex w-[100%] gap-5 overflow-auto scroll-smooth scrollbar">
        {data?.gridElements?.infoWithStyle?.info.map((item) => {
          //   console.log(item);
          return (
            //   <div  className="flex">
            <img
              key={item.id}
              className="xs:w-28 sm:w-36 cursor-not-allowed"
              src={ICON_URL + item.imageId}
              alt={item?.action?.text}
            />
            //   </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubCarousel;
