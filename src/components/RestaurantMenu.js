import { useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import useRestaurant from "./utils/useRestaurantMenu";
import Menuitems from "./Menuitems";
import ShimmerMenu from "./Shimmer/ShimmerMenu";

const RestaurantMenu = () => {
  let { resid } = useParams();
  // console.log(resid);

  const { restaurant } = useRestaurant(resid);
  console.log(restaurant);

  const restaurantMain = restaurant?.cards[0]?.card?.card?.info;
  // console.log("restaurantMain", restaurantMain);
  const restaurantMenu =
    restaurant?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return !restaurant ? (
    <ShimmerMenu />
  ) : (
    //     ----------    Restaurant Name   ------------------

    <div className="display flex flex-col xs:mx-5 ss:mx-10 sm:mx-16 lg:mx-28 xl:mx-48">
      <div className="py-5">
        <p className="text-[0.675rem] text-gray-500">{`Home / ${restaurantMain?.city} / ${restaurantMain?.locality} / ${restaurantMain?.name}`}</p>
      </div>
      <div className="flex justify-between items-center border-b-2 border-dashed ">
        <div className="display flex flex-col ">
          <h1 className="font-bold lg:text-xl xs:text-base">
            {restaurantMain?.name}
          </h1>
          <h4 className="text-[13px] lg:text-sm text-slate-600 ">
            {restaurantMain?.cuisines.join(", ")}
          </h4>
          <h3 className="text-[13px] lg:text-sm text-slate-600">
            {restaurantMain?.locality},{" "}
            {restaurantMain?.sla?.lastMileTravelString}
          </h3>
          <div className="flex lg:gap-5 xs:gap-2 py-3 xs:text-sm font-medium">
            <p className="flex lg:gap-2 xs:gap-1 items-center ">
              <span>
                <AiOutlineClockCircle size={20} />
              </span>
              {restaurantMain?.sla?.slaString}
            </p>
            <p className="flex lg:gap-2 xs:gap-1 items-center ">
              <span>
                <HiOutlineCurrencyRupee size={20} />
              </span>
              {restaurantMain?.costForTwoMessage}
            </p>
          </div>
        </div>

        <div className="border border-gray-200 rounded flex flex-col items-center p-1 shadow-sm">
          <p className="text-darkgreen font-bold py-1 border-b text-center">
            <span className="text-[1rem] pr-1">★</span>
            {restaurantMain?.avgRating}
          </p>
          <p className="text-[11px] text-slate-600 lg:font-extrabold xl:font-bold  py-1">
            {restaurantMain?.totalRatingsString}
          </p>
        </div>
      </div>

      {/* ----------    Restaurant Menuitems   ------------------ */}

      <div className="flex flex-col flex-wrap ">
        {restaurantMenu &&
          Object.values(restaurantMenu).map((menu, id) => {
            const menuItems = menu?.card?.info;
            // console.log(menuItems);

            return <Menuitems key={id} items={menuItems} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
