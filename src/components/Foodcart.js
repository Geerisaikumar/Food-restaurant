import React from "react";
import { IMG_CDN_URL } from "./constant";
import Default from "../Images/default.jpg";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { decrementCart, incrementCart, removeItem } from "./utils/cartSlice";

const Foodcart = (cartitem) => {
  const { name, price, quantity, defaultPrice, imageId } = cartitem;
  const priceItem = price / 100 || defaultPrice / 100;
  // console.log(id);
  const dispatch = useDispatch();

  const deleteCartItem = (cartitem) => {
    dispatch(removeItem(cartitem));
  };

  const decrement = (cartitem) => {
    dispatch(decrementCart(cartitem));
  };

  const increment = (cartitem) => {
    dispatch(incrementCart(cartitem));
  };

  return (
    <div className="flex justify-between py-2 border-b items-center z-0">
      <div className="flex xs:gap-2 ss:gap-2 sm:gap-5 items-center">
        <img
          src={imageId ? IMG_CDN_URL + imageId : Default}
          className="xs:w-24 sm:w-32  rounded"
        />
        <p className="xs:text-xs ss:text-sm sm:text-base font-bold xs:w-28 ss:w-44">
          {name}
        </p>
      </div>
      <div className="flex xs:gap-2 ss:gap-5 items-center">
        <div className="flex gap-1 border xs:px-1 ss:px-4 xs:py-0 ss:py-2">
          <button
            className="hover:text--lightgreen"
            onClick={() => decrement(cartitem)}
          >
            -
          </button>
          <h2>{quantity}</h2>
          <button
            className="hover:text--lightgreen"
            onClick={() => increment(cartitem)}
          >
            +
          </button>
        </div>

        <h1 className="font-medium xs:text-xs ss:text-sm sm:text-base">
          {"₹ " + (quantity * priceItem).toFixed(2)}
        </h1>
        <p className="hover:text-red" onClick={() => deleteCartItem(cartitem)}>
          <AiOutlineCloseCircle />
        </p>
      </div>
    </div>
  );
};

export default Foodcart;
