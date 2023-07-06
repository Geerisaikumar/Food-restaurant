import { useState } from "react";
import { IMG_CDN_URL } from "./constant";

let Restaurantcard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
  slaString,
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className={`m-2 my-3 p-3 w-72 h-[21rem] rounded-md hover:shadow-2xl `}
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      <img
        className="w-72 h-44 rounded-sm"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant"
      />
      <h3 className="first-letter:font-bold  text-sm p-1 ">{name}</h3>
      <h4 className="text-xs text-gray-600">{cuisines?.join(", ")}</h4>
      <div className="flex justify-between py-3 items-center text-[12px] text-gray-600">
        <p
          className={`px-2 text-[#ffffff] rounded  ${
            Number(avgRating) > 3.9 ? "bg-darkgreen" : "bg-liteorange"
          }`}
        >
          <span className="text-[1rem] ">★</span> {avgRating}
        </p>
        <p className="">
          <span className=" px-3 text-gray-400 ">|</span>
          {slaString}
        </p>
        <p className="">
          <span className="px-3 text-gray-400 ">|</span> {costForTwoString}
        </p>
      </div>
      {visible && (
        <div className={`border-t`}>
          <p className="text-xs font-bold text-center pt-3 text-blue-500 ">
            QUICK VIEW
          </p>
        </div>
      )}
    </div>
  );
};

export default Restaurantcard;
