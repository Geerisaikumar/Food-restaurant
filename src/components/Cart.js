import { useDispatch, useSelector } from "react-redux";
import Foodcart from "./Foodcart";
import { clearItems } from "./utils/cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "../Images/empty_cart.webp";
import Modal from "./Modal/Modal";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);
  const [openModal, setOpenModal] = useState(false);

  let totalPrice = 0;
  cartItems.map((item) => {
    console.log("item", item);
    let price =
      (item.quantity * item.price) / 100 ||
      (item.quantity * item.defaultPrice) / 100;
    totalPrice += price;
    return totalPrice;
  });

  const dispatch = useDispatch();
  const Clearcartitems = () => {
    dispatch(clearItems());
  };

  // xs:mx-5 ss:mx-10 sm:mx-20 md:mx-44 lg:mx-32 xl:mx-60

  return cartItems.length ? (
    <div className="flex flex-col justify-center xs:mx-1 ss:mx-5 my-5 sm:mx-12 md:mx-24 lg:mx-36 xl:mx-80 bg-[##f0f2f6] z-0">
      <h1 className="xs:text-xl sm:text-2xl font-medium text-orange ">
        Cart Summary Details
      </h1>
      {cartItems &&
        cartItems.map((item, id) => {
          console.log(item);
          return (
            <div key={id} className="">
              <Foodcart {...item} />
            </div>
          );
        })}
      <div className="xs:px-3 sm:px-6">
        <div className="flex items-center justify-center z-20">
          {openModal && <Modal />}
        </div>
        <h1 className="py-4 text-lg text-gray-600">PRICE DETAILS</h1>
        <div className="flex justify-between">
          <h1>Total Price</h1>
          <p>{"₹" + totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-5 border-b-2 border-dashed">
          <h1>Delivery Charges</h1>
          <p>{"₹" + (40.0).toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-5 font-bold">
          <h1 className="text-xl">Total Charges</h1>
          <p>{"₹ " + Math.round(totalPrice + 40)}</p>
        </div>
        <div className="flex justify-between mt-12">
          <button
            onClick={() => Clearcartitems()}
            className="border px-4 py-2 rounded bg-red text-white hover:bg-white hover:text-black hover:border border-red"
          >
            Clear Cart
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className="border px-4 py-2 rounded bg-lightgreen text-white hover:bg-white hover:text-black hover:border border-lightgreen"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center my-14 mx-auto ">
      <img src={EmptyCart} className="w-80 rounded" alt="EmptyCart" />
      <h1 className="text-center text-lg font-bold py-3">Your Cart is Empty</h1>
      <p className=" text-sm text-gray-500">
        You can go to home page to view more restaurants
      </p>
      <button className="mt-5 px-2 py-2 font-medium button-class capitalize">
        <Link to={"/"}>See restaurants near you</Link>
      </button>
    </div>
  );
};

export default Cart;
