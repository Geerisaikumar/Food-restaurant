import React from "react";
import { IMG_CDN_URL } from "./constant";
import Default from "../Images/gray.jpg";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { decrementCart, incrementCart, removeItem } from "./utils/cartSlice";

const Foodcart = (cartitem) => {
  console.log(cartitem);
  const { name, price, defaultPrice, imageId } = cartitem;
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
      <div className="flex xs:gap-2 ss:gap-2 sm:gap-5 h-24 items-center">
        <img
          src={imageId ? IMG_CDN_URL + imageId : Default}
          className="xs:w-24 sm:w-32  rounded"
          alt="RestaurantCardIMG"
        />
        <p className="xs:text-xs ss:text-sm font-bold xs:w-28 ss:w-60">
          {name}
        </p>
      </div>
      <div className="flex gap-1 border xs:px-1 ss:px-2 sm:px-3 xs:py-0 ss:py-1">
        <button
          className="hover:text-lightgreen"
          onClick={() => decrement(cartitem)}
        >
          -
        </button>
        <h2>{cartitem?.quantity}</h2>
        <button
          className="hover:text-lightgreen"
          onClick={() => increment(cartitem)}
        >
          +
        </button>
      </div>

      <div className="flex justify-between items-center xs:gap-2 ss:gap-5">
        <h1 className="font-medium xs:text-xs ss:text-sm sm:text-base">
          {"₹" + (cartitem?.quantity * priceItem).toFixed(2)}
        </h1>
        <p className="hover:text-red" onClick={() => deleteCartItem(cartitem)}>
          <AiOutlineCloseCircle />
        </p>
      </div>
    </div>
  );
};

export default Foodcart;
