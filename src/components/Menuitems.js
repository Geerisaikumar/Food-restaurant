import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { IMG_CDN_URL } from "./constant";
import Default from "../Images/default.jpg";
import ShimmerMenu from "./ShimmerMenu";

const Menuitems = ({ items }) => {
  // console.log("items", items);
  const { imageId, name, description } = items;

  const price = items.price / 100 || items.defaultPrice / 100;

  let dispatch = useDispatch();

  const FoodCartItems = (items) => {
    console.log(items);
    dispatch(addItem(items));
  };

  return items.length === 0 ? (
    <ShimmerMenu />
  ) : (
    <div className="flex justify-between py-2 border-gray-400 border-b">
      <div className="">
        <h3 className="font-bold p-1 xs:text-sm lg:text-base">{name}</h3>
        <h3 className="">{"₹ " + price}</h3>

        <p
          className={`p-1 pt-2 text-gray-400 text-sm w-[40rem] xs:hidden xl:inline-block`}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <img
          src={imageId ? IMG_CDN_URL + imageId : Default}
          className="xs:w-24 sm:w-32 lg:w-44 rounded "
        />

        <button
          className="my-1 xs:py-0 sm:py-1 px-4 border text-[#3fd966] font-bold bg-white rounded shadow-md hover:shadow-lg"
          onClick={() => FoodCartItems(items)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Menuitems;
