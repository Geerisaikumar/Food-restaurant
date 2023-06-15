import { IMG_CDN_URL } from "./constant";

let Restaurantcard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
  slaString,
}) => {
  return (
    <div className=" m-3 p-3 w-72 rounded-md h-80 hover:shadow-lg hover:border border-gray-200">
      <img
        className="w-72 h-44 rounded-sm"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="restaurant"
        loading="lazy"
      />
      <h3 className="font-medium py-1">{name}</h3>
      <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
      <div className="flex justify-between py-3 items-center text-[12px] text-gray-600">
        <p
          className={`px-2 text-[#ffffff] rounded ${
            Number(avgRating) > 3.9 ? "bg-[#4AD66D]" : "bg-orange-600"
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
    </div>
  );
};

export default Restaurantcard;
