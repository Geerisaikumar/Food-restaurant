import React, { useEffect, useState } from "react";
import { RESTAURANT_API } from "../constant";

const useRestaurantData = () => {
  let [FilterRestaurants, SetFilterRestaurants] = useState([]);
  let [AllRestaurants, SetAllRestaurants] = useState([]);
  let [RestaurantCarousel, SetRestaurantCarousel] = useState([]);
  let [itemCarousel, SetItemCarousel] = useState([]);

  useEffect(() => {
    Getrestaurantdata();
  }, []);

  async function Getrestaurantdata() {
    try {
      const data = await fetch(RESTAURANT_API);
      console.log(data);
      if (data.status !== 200) {
        throw new Error("API Internal Error");
      } else {
        const json = await data.json();
        console.log("json", json);

        SetAllRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants ||
            json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
        );

        SetFilterRestaurants(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants ||
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants ||
            json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
        );
        SetRestaurantCarousel(json?.data?.cards[0]?.card?.card);
        SetItemCarousel(
          json?.data?.cards[0]?.card?.card || json?.data?.cards[1]?.card?.card
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  return [
    AllRestaurants,
    FilterRestaurants,
    SetFilterRestaurants,
    RestaurantCarousel,
    itemCarousel,
  ];
};

export default useRestaurantData;
// 49
