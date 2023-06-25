import Restaurantcard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { Filterdata } from "./utils/helper";
import { RESTAURANT_API } from "./constant";
import { SearchErrorPage } from "./utils/helper";

let Body = () => {
  let [FilterRestaurants, SetFilterRestaurants] = useState([]);
  let [AllRestaurants, SetAllRestaurants] = useState([]);
  let [SearchTxt, SetSearchTxt] = useState("");

  useEffect(() => {
    Getrestaurantdata();
  }, []);

  async function Getrestaurantdata() {
    try {
      const data = await fetch(RESTAURANT_API);
      // console.log(data)
      if (data.status !== 200) {
        throw new Error("API Internal Error");
      } else {
        const json = await data.json();
        console.log("json", json);
        SetAllRestaurants(json?.data?.cards);
        SetFilterRestaurants(json?.data?.cards);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return AllRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="xs:px-8 ss:px-24 sm:px-6 md:px-20 lg:px-11 xl:px-5  ">
      <div className="flex sm:justify-between sm:flex-row xs:flex-col-reverse xs:py-2  sm:my-1 items-center border-b sticky top-0 bg-white h-[calc(100%-4rem)]">
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
              console.log(e.target.value);
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

      <div className="flex flex-col ">
        <div className="flex flex-wrap font-medium">
          {FilterRestaurants.length === 0 ? (
            <SearchErrorPage />
          ) : (
            FilterRestaurants &&
            Object.values(FilterRestaurants).map((restaurant) => {
              // console.log(restaurant);
              return (
                <Link
                  to={"/restaurant/" + restaurant?.data?.data?.id}
                  key={restaurant?.data?.data?.id}
                >
                  <Restaurantcard {...restaurant?.data?.data} />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
