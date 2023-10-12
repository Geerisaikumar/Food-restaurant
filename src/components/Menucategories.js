import React, { Children } from "react";
import Menustructure from "./Menustructure";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import RestaurantDetails from "./RestaurantDetails";

const Menucategories = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items &&
        Object.values(items).map((item, indx) => {
          let data = item?.card?.card;

          const title = data?.title ? data?.title : "";
          const menuList = data?.itemCards;
          const subMenuList = data?.categories;

          const [showMenu, setShowMenu] = useState(true);

          return (
            title && (
              <div key={indx}>
                <div>
                  {title && (
                    <div className="flex justify-between py-4">
                      <p className="font-bold text-[17px] pt-1 ">
                        {title}
                        {menuList ? " (" + menuList?.length + ")" : null}
                      </p>
                      {menuList ? (
                        showMenu ? (
                          <button
                            className="mr-5"
                            onClick={() => setShowMenu(false)}
                          >
                            <BsChevronUp size={18} />
                          </button>
                        ) : (
                          <button
                            className="mr-5"
                            onClick={() => setShowMenu(true)}
                          >
                            <BsChevronDown size={18} />
                          </button>
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  )}

                  {/* -----------------------   Main Menu Items   ---------------------------------------  */}

                  <div className="border-b-8">
                    {showMenu &&
                      menuList &&
                      menuList.map((menuItem) => {
                        return (
                          <Menustructure
                            key={menuItem?.card?.info?.id}
                            items={menuItem?.card?.info}
                          />
                        );
                      })}
                  </div>
                </div>

                {/* -----------------------   Sub Menu Items   ---------------------------------------- */}

                <div className="">
                  {subMenuList &&
                    Object.values(subMenuList).map((subMenuItems) => {
                      // console.log(subMenuItems);
                      const { title, itemCards } = subMenuItems;
                      const [showSubMenu, setShowSubMenu] = useState(false);

                      return (
                        <div key={title} className="border-b-2">
                          <div className="flex items-center justify-between ">
                            <p className="font-medium py-4">
                              {title}
                              {itemCards?.length
                                ? " (" + itemCards?.length + ")"
                                : null}
                            </p>
                            {showSubMenu ? (
                              <button
                                className="mr-5"
                                onClick={() => setShowSubMenu(false)}
                              >
                                <BsChevronUp size={18} />
                              </button>
                            ) : (
                              <button
                                className="mr-5"
                                onClick={() => setShowSubMenu(true)}
                              >
                                <BsChevronDown size={18} />
                              </button>
                            )}
                          </div>
                          {showSubMenu &&
                            itemCards &&
                            itemCards.map((data) => {
                              return (
                                <Menustructure
                                  key={data?.card?.info?.id}
                                  items={data?.card?.info}
                                />
                              );
                            })}
                        </div>
                      );
                    })}
                </div>
              </div>
            )
          );
        })}

      {/* -----------------------   Restaurant Details   ---------------------------------------  */}

      {items &&
        Object.values(items).map((data, indx) => {
          // console.log(data);
          data = data?.card?.card;
          return <RestaurantDetails key={indx} details={data} />;
        })}
    </div>
  );
};

export default Menucategories;
