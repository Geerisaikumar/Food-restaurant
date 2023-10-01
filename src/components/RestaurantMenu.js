import { useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import useRestaurant from "./utils/useRestaurantMenu";
import ShimmerMenu from "./Shimmer/ShimmerMenu";
import Menucategories from "./Menucategories";
import { IMG_CDN_URL } from "./constant";
import { useContext } from "react";
import useContextAPI from "./utils/useContextAPI";

const RestaurantMenu = () => {
  let { deliveryHandler } = useContext(useContextAPI);
  let { resid } = useParams();
  // console.log(resid);

  const { restaurant } = useRestaurant(resid);
  // console.log(restaurant);

  const restaurantMain = restaurant?.cards[0]?.card?.card?.info;
  // console.log("restaurantMain", restaurantMain);

  // Delivery Charges Variable

  let charges = restaurantMain?.feeDetails?.fees
    ? restaurantMain?.feeDetails?.fees[0]?.fee
    : null;

  deliveryHandler(charges);

  const restaurantMenuDetails =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  // console.log(restaurantMenuDetails);

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    //     ----------    Restaurant Name   ------------------

    <div className="display flex flex-col xs:mx-2 ss:mx-10 sm:mx-16 md:mx-28 lg:mx-32 xl:mx-60 ">
      <div className="py-5">
        <p className="text-[0.675rem] text-gray-500">{`Home / ${restaurantMain?.city} / ${restaurantMain?.name}`}</p>
      </div>
      <div className="flex justify-between items-center border-b border-dashed sticky top-0 bg-white h-[calc(100%-4rem)]">
        <div className="display flex flex-col">
          <h1 className="font-bold lg:text-xl xs:text-base">
            {restaurantMain?.name}
          </h1>
          <h4 className="text-[13px]  text-slate-600 ">
            {restaurantMain?.cuisines.join(", ")}
          </h4>
          <h3 className="text-[13px] lg:text-xs pt-1 text-slate-600">
            {restaurantMain?.areaName},
            {restaurantMain?.sla?.lastMileTravelStrin}
          </h3>
          <div className="flex lg:gap-5 xs:gap-2 py-3 xs:text-sm font-semibold">
            <p className="flex xs:gap-1 items-center ">
              <span>
                <AiOutlineClockCircle size={20} />
              </span>
              {restaurantMain?.sla?.slaString}
            </p>
            <p className="flex xs:gap-1 items-center ">
              <span>
                <HiOutlineCurrencyRupee size={20} />
              </span>
              {restaurantMain?.costForTwoMessage}
            </p>
          </div>

          {/* Incase of Rain or Delivery Charges / Restaurant Busy this Will be Enabled on RestaurantMenu Page */}

          {restaurantMain?.expectationNotifiers &&
          restaurantMain?.expectationNotifiers[0]?.icon?.imageId ? (
            <div className="flex gap-2 mb-1">
              <img
                className="h-3 mt-1 "
                src={
                  IMG_CDN_URL +
                  restaurantMain?.expectationNotifiers[0]?.icon?.imageId
                }
                alt="NotifiersIMG"
              />
              <p className="text-[13px]  lg:text-[13px] text-slate-600 xs:w-72 sm:w-full ">
                {restaurantMain?.expectationNotifiers[0]?.text}
              </p>
            </div>
          ) : null}
        </div>

        <div className="border border-gray-200 rounded flex flex-col items-center px-1 shadow-sm">
          <p className="text-darkgreen font-bold text-xs border-b py-2 text-center">
            <span className="text-[1rem] pr-1">★</span>
            {restaurantMain?.avgRating}
          </p>
          <p className="text-[10px] text-slate-600 lg:font-medium py-2">
            {restaurantMain?.totalRatingsString}
          </p>
        </div>
      </div>

      {/* ----------    Restaurant Menuitems   ------------------ */}

      <div className="flex flex-col flex-wrap ">
        {restaurantMenuDetails &&
          Object.values(restaurantMenuDetails).map((menu, indx) => {
            // console.log("menu", menu);

            return <Menucategories key={indx} items={menu} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
