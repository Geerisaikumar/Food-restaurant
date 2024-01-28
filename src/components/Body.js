import Restaurantcard from "./Restaurantcard";
import { useState } from "react";
import Shimmer from "./Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { Filterdata } from "./utils/helper";
import { SearchErrorPage } from "./utils/helper";
import OfferCarousel from "./Carousel/OfferCarousel";
import useRestaurantData from "./utils/useRestaurantData";
import SubCarousel from "./Carousel/SubCarousel";

let Body = () => {
  let [SearchTxt, SetSearchTxt] = useState("");

  const [
    AllRestaurants,
    FilterRestaurants,
    SetFilterRestaurants,
    RestaurantCarousel,
    itemCarousel,
  ] = useRestaurantData();

  return AllRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {/* Shows a Number odf Restaurants and Search Funtionlity */}

      <div className="flex sm:justify-between bg-white sm:flex-row xs:flex-col-reverse xs:py-2 sm:my-1 shadow-sm items-center sticky top-0  h-[calc(100%-4rem)] sm:px-4 md:px-10 lg:px-12 xl:px-16 text-slate-600 [font-weight:600">
        <h1 className="font-bold xs:text-xl md:text-2xl ">
          {FilterRestaurants.length > 1
            ? FilterRestaurants.length + " Restaurants"
            : FilterRestaurants.length + " Restaurant"}
        </h1>
        <form className=" ">
          <input
            className="bg-gray-50 xs:w-44 xs:px-1 lg:w-64 h-8 m-3 p-1 px-3 outline-none rounded focus:border focus:border-orange"
            placeholder="Search for restaurants"
            value={SearchTxt}
            onChange={(e) => {
              // console.log(e.target.value);
              SetSearchTxt(e.target.value);
            }}
          />
          <button
            className=" p-1 px-3 button-class"
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target.value);
              const data = Filterdata(SearchTxt, AllRestaurants);
              SetFilterRestaurants(data);
            }}
          >
            Search
          </button>
        </form>
      </div>

      <div className="xs:px-8 ss:px-24 sm:px-4 md:px-20 lg:px-8 xl:px-16 py-3">
        {/* <OfferCarousel data={RestaurantCarousel} />
        <div className="">
          <h2 className="xs:text-[1.1rem] sm:text-xl font-bold text-slate-600 mt-3">
            {itemCarousel?.header?.title}
          </h2>
          <SubCarousel data={itemCarousel} />
        </div> */}

        <div className="flex flex-wrap font-medium ">
          {FilterRestaurants.length === 0 ? (
            <SearchErrorPage />
          ) : (
            FilterRestaurants &&
            Object.values(FilterRestaurants).map((restaurant) => {
              // console.log(restaurant);

              return (
                <div key={restaurant?.info?.id}>
                  <Link to={"/restaurant/" + restaurant?.info?.id}>
                    <Restaurantcard restaurant={restaurant?.info} />
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
