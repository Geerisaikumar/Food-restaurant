import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
import { IMG_CDN_URL } from "./constant";
import Default from "../Images/default.jpg";

const Menuitems = ({ items }) => {
  // console.log("items", items);
  const { imageId, name, description } = items;

  const price = items.price / 100 || items.defaultPrice / 100;

  let dispatch = useDispatch();

  const FoodCartItems = (items) => {
    console.log(items);
    dispatch(addItem(items));
  };

  return (
    <div className="flex justify-between py-2 border-gray-400 border-b">
      <div className="">
        <h3 className="font-medium p-1 xs:text-sm lg:text-[0.9rem]">{name}</h3>
        <h3 className="text-sm">{"₹ " + price}</h3>

        <p
          className={`p-1 pt-2 lg:w-[35rem] text-gray-400 text-sm w-[40rem] xs:hidden lg:inline-block`}
        >
          {description}
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <img
          src={imageId ? IMG_CDN_URL + imageId : Default}
          className="xs:w-24 sm:w-32 lg:w-36 rounded "
        />

        <button
          className="border px-5 text-green-500 font-medium my-1"
          onClick={() => FoodCartItems(items)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Menuitems;
