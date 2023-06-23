import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./utils/userContext";
import { useSelector } from "react-redux";
import { BsCartCheck } from "react-icons/bs";
import { HiStatusOffline, HiStatusOnline } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import Logo from "../Images/Logo.png";
import useOnline from "./utils/useOnline";

let Title = () => {
  return (
    <div className="title">
      <Link to="/">
        <img
          src={Logo}
          className="w-12 xs:w-10 sm:w-14 bg-white hover:scale-105 ease-out duration-500"
        />
      </Link>
    </div>
  );
};

let Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let { user } = useContext(userContext);
  let cartItems = useSelector((store) => store.cart.items);

  let isOnline = useOnline(true);

  console.log(cartItems);

  return (
    <div className="flex justify-between items-center py-2 xs:px-3 ss:px-4 md:px-10 lg:px-12 shadow-md bg-white sticky top-0 z-10">
      <Title />
      <div>
        <ul className="flex items-center lg:gap-4">
          <li className="xs:px-1">
            {isOnline ? (
              <p className="flex items-center gap-2 text-lightgreen font-medium">
                <span>
                  <HiStatusOnline />
                </span>
                Online
              </p>
            ) : (
              <p className="flex items-center gap-2 text-red font-medium animate-bounce ">
                <span>
                  <HiStatusOffline />
                </span>
                Offline
              </p>
            )}
          </li>

          <li className="xs:px-2 flex items-center xs:gap-1 lg:gap-2 hover:text-orange ">
            <span>
              <RxPerson size={20} />
            </span>
            <Link to="/sign-in" className="first-letter:font-semibold">
              {user.name}
            </Link>
          </li>

          {/* <li className="xs:px-2 flex items-center xs:gap-1 lg:gap-2 hover:text-orange">
            <span>
              <BsCartCheck size={20} />
            </span>
            <Link to="/cart" className="first-letter:font-semibold">
              Cart {cartItems.length}
            </Link>
          </li> */}

          <li className=" ">
            <Link
              to="/cart"
              className="first-letter:font-semibold hover:text-orange "
            >
              <div className="flex xs:gap-1 lg:gap-2 ">
                <p className="w-5 h-6  relative text-center hover:border-orange">
                  <span
                    className={`absolute inset-0 pt-[2px] rounded-tl-2xl text-sm ${
                      cartItems.length !== 0
                        ? "bg-green-500 text-white hover:bg-orange border-none"
                        : "text-black border border-slate-500"
                    }`}
                  >
                    {cartItems.length}
                  </span>
                </p>
                <p className="text">Cart</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
