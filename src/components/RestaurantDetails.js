import React from "react";
import { BiMap } from "react-icons/bi";
import { ICON_URL } from "./Constant";

const RestaurantDetails = ({ details }) => {
  //   console.log(details);
  const { imageId, text, area, name, completeAddress } = details;
  return (
    <div className="bg-gray-100 px-5 ">
      {imageId && (
        <div className="flex gap-4 items-center py-6 border border-b-gray-500">
          <img
            src={imageId ? ICON_URL + imageId : null}
            alt="fssai-IMG"
            className="h-8 w-12"
          />
          <p>{text}</p>
        </div>
      )}
      {area && (
        <div className="py-6 pb-10 h-52">
          <p className="text-slate-700 font-medium ">{name}</p>
          <p className="text-sm text-slate-600">
            {area ? "( Outlet:" + area + ")" : false}
          </p>

          <div className="flex items-center gap-3 text-slate-500 py-3">
            <BiMap />
            <p className="sm:text-xs md:text-[14px] ">{completeAddress}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;
