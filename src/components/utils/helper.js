import { Link } from "react-router-dom";
import SearchErrorImg from "../../Images/SearchError.png";
import EmptyCartIMG from "../../Images/empty_cart.webp";

export function Filterdata(SearchTxt, AllRestaurants) {
  return AllRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(SearchTxt.toLowerCase())
  );
}

export const SearchErrorPage = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-14">
      <img src={SearchErrorImg} alt={"SearchErrorImg"} />
      <h1 className="py-8 text-2xl">Sorry, no results found!</h1>
      <p className="text-xl text-gray-500">
        Please check the spelling or try searching for something else
      </p>
    </div>
  );
};

export const CartEmpty = () => {
  return (
    <div className="flex flex-col items-center my-[2.42rem] mx-auto ">
      <img src={EmptyCartIMG} className="w-80 rounded" alt="EmptyCart" />
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
