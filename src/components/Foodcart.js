import React from "react";
import { IMG_CDN_URL } from "./constant";
import Default from "../Images/default.jpg";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";

const Foodcart = (cartitem) => {
  const { name, price, defaultPrice, imageId } = cartitem;
  const priceItem = price / 100 || defaultPrice / 100;
  // console.log(id);
  const dispatch = useDispatch();

  const deleteCartItem = (cartitem) => {
    dispatch(removeItem(cartitem));
  };
  return (
    <div className="flex justify-between py-3 border-b items-center">
      <div className="w-2/4">
        <h2 className="font-bold ">{name}</h2>
        <h2 className="py-3">{"₹ " + priceItem}</h2>
      </div>

      <div className="flex flex-col  items-center">
        <img
          src={imageId ? IMG_CDN_URL + imageId : Default}
          className="xs:w-24 sm:w-32 lg:w-44 rounded"
        />
        <button
          onClick={() => deleteCartItem(cartitem)}
          className="my-1 xs:px-2 xs:py-0 sm:px-5 lg:px-8 sm:py-1 border text-[rgb(233,55,55)] font-bold bg-white rounded shadow-md hover:shadow-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Foodcart;
