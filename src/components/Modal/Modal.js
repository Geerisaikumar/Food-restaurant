import React from "react";
import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import Success from "../../Images/success.gif";

const Modal = () => {
  const dispatch = useDispatch();
  const clearCartItems = () => dispatch(clearItems());
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center overscroll-none">
      <div className="bg-white w-80 h-56 flex flex-col items-center justify-center rounded ">
        <img src={Success} className="w-36" />
        <p className="pb-10">Order Successful!</p>
        <Link to={"/"}>
          <button
            onClick={() => clearCartItems()}
            className="button-class px-6 py-1"
          >
            Ok
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
