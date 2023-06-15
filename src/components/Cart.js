import { useDispatch, useSelector } from "react-redux";
import Foodcart from "./Foodcart";
import { clearItems } from "./utils/cartSlice";
import { Link } from "react-router-dom";
import EmptyCart from "../Images/empty_cart.webp";
const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  let totalPrice = 0;
  cartItems.map((item) => {
    let price = item.price / 100 || item.defaultPrice / 100;
    totalPrice += item.quantity * price;
    return totalPrice;
  });

  const dispatch = useDispatch();
  const Clearcartitems = () => {
    dispatch(clearItems());
  };

  // xs:mx-5 ss:mx-10 sm:mx-20 md:mx-44 lg:mx-32 xl:mx-60

  return cartItems.length ? (
    <div className="xs:mx-5 ss:mx-10 my-5 sm:mx-20 md:mx-44 lg:mx-32 xl:mx-60 bg-[##f0f2f6] ">
      <h1 className="text-2xl font-medium text-orange-500 py-2">
        Cart Summary Details
      </h1>
      {cartItems &&
        cartItems.map((item, id) => {
          // console.log(item);
          return (
            <div key={item.id} className="">
              <Foodcart {...item} />
            </div>
          );
        })}
      <div className="">
        <h1 className="py-4 text-lg text-gray-600">PRICE DETAILS</h1>
        <div className="flex justify-between">
          <h1>Total Price</h1>
          <p>{"₹" + totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-2 border-b-2 border-dashed">
          <h1>Delivery Charges</h1>
          <p>{"₹" + (40.0).toFixed(2)}</p>
        </div>
        <div className="flex justify-between py-5 font-bold">
          <h1>Total Charges</h1>
          <p>{"₹ " + Math.round(totalPrice + 40)}</p>
        </div>
        <div className="flex justify-between mt-12">
          <button
            onClick={() => Clearcartitems()}
            className="border px-4 py-2 rounded bg-[rgb(233,55,55)] text-white hover:bg-white hover:text-black hover:border border-[rgb(233,55,55)]"
          >
            Clear Cart
          </button>
          <button className="border px-4 py-2 rounded bg-[#2DC653] text-white hover:bg-white hover:text-black hover:border border-[#2DC653]">
            Place Order
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center my-10 mx-auto h-screen">
      <img src={EmptyCart} className="w-96 rounded" />
      <h1 className="text-center text-lg font-bold py-3">Your Cart is Empty</h1>
      <p className=" text-sm text-gray-500">
        You can go to home page to view more restaurants
      </p>
      <button className="mt-5 px-2 py-3 font-medium button-class capitalize">
        <Link to={"/"}>See restaurants near you</Link>
      </button>
    </div>
  );
};

export default Cart;
