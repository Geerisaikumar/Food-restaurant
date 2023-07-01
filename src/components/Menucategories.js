import React from "react";
import Menustructure from "./Menustructure";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

const Menucategories = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(items);
  return (
    <div>
      {items &&
        Object.values(items).map((data, indx) => {
          // console.log(data);
          const title = data?.card?.card?.title;
          const menuList = data?.card?.card?.itemCards;
          const subMenuList = data?.card?.card?.categories;
          return (
            <div key={indx}>
              <div className="">
                <p className="font-bold pt-1">
                  {title}{" "}
                  {menuList?.length ? menuList?.length : subMenuList?.length}
                </p>

                {/* -----------------------   Main Menu Items   ---------------------------------------  */}

                {menuList &&
                  menuList.map((menuItem) => {
                    // console.log(menuItem);
                    return (
                      <div key={menuItem?.card?.info?.id}>
                        <Menustructure items={menuItem} />
                      </div>
                    );
                  })}
              </div>

              {/* -----------------------   Sub Menu Items   ---------------------------------------- */}

              <div>
                {subMenuList &&
                  Object.values(subMenuList).map((subMenuItems) => {
                    // console.log(subMenuItems);
                    const { title, itemCards } = subMenuItems;
                    return (
                      <div>
                        <p className="font-medium pt-1">
                          {title} {itemCards.length}
                        </p>
                        {itemCards &&
                          itemCards.map((data) => {
                            console.log(data);
                            return <Menustructure items={data} />;
                          })}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Menucategories;
