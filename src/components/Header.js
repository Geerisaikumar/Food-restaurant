import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "./utils/useContextAPI";
import { useSelector } from "react-redux";
import { HiStatusOffline, HiStatusOnline } from "react-icons/hi";
import { RxPerson } from "react-icons/rx";
import Logo from "../Images/Logo.png";
import useOnline from "./utils/useOnline";

let Title = () => {
  return (
    <div className="xs:h-11 sm:h-16">
      <Link to="/">
        <img
          src={Logo}
          alt="Logo"
          className="xs:w-10 sm:w-12 sm:my-1 bg-white hover:scale-105 ease-out duration-500"
        />
      </Link>
    </div>
  );
};

let Header = () => {
  let { user } = useContext(userContext);
  let cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);

  let isOnline = useOnline(true);

  return (
    <div
      className="flex justify-between items-center py-1 xs:px-3 ss:px-4 md:px-10 lg:px-12 xl:px-16 shadow-md bg-white 
     z-10"
    >
      <Title />
      <div>
        <ul className="flex items-center xs:gap-2 lg:gap-4">
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

          <li className="xs:px-1 flex xs:gap-1 lg:gap-2 hover:text-orange ">
            <span>
              <RxPerson size={20} />
            </span>
            <Link to="/sign-in" className="first-letter:font-semibold">
              {user.name}
            </Link>
          </li>

          <li className=" xs:px-1">
            <Link
              to="/cart"
              className="first-letter:font-semibold hover:text-orange "
            >
              <div className="flex xs:gap-2 ">
                <p className="w-5 h-6  relative text-center hover:border-orange">
                  <span
                    className={`absolute inset-0 pt-[2px] rounded-tl-2xl text-sm ${
                      cartItems && cartItems.length !== 0
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
