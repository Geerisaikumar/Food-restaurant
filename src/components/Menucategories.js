import React from "react";
import Menustructure from "./Menustructure";
import { useState } from "react";

const Menucategories = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false);
  // console.log(items);
  return (
    <div>
      {items &&
        Object.values(items).map((data, indx) => {
          // console.log(data);

          data = data?.card?.card;

          const title = data?.title;
          const menuList = data?.itemCards;
          const subMenuList = data?.categories;
          // console.log(subMenuList);

          return (
            <div key={indx}>
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-bold pt-1">
                    {title}
                    {menuList
                      ? " (" + menuList?.length + ")"
                      : subMenuList?.length
                      ? " (" + subMenuList?.length + ")"
                      : null}
                  </p>
                </div>

                {/* -----------------------   Main Menu Items   ---------------------------------------  */}

                <div>
                  {menuList &&
                    menuList.map((menuItem) => {
                      // console.log(menuItem);
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

              <div>
                {subMenuList &&
                  Object.values(subMenuList).map((subMenuItems) => {
                    // console.log('subMenuItems',subMenuItems);
                    const { title, itemCards } = subMenuItems;
                    return (
                      <div key={title}>
                        <p className="font-medium pt-1">
                          {title}
                          {itemCards?.length
                            ? " (" + itemCards?.length + ")"
                            : null}
                        </p>
                        {itemCards &&
                          itemCards.map((data) => {
                            // console.log(data);
                            return <Menustructure items={data?.card?.info} />;
                          })}
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}

      {/* -----------------------   Restaurant Details   ---------------------------------------  */}

      {/* {items &&
        Object.values(items).map((data, indx) => {
          // console.log(data);
          data = data?.card?.card;
          return (
            <div key={indx} className="bg-gray-100 px-5">
              <div className="flex gap-4 items-center border-b-2">
                <img
                  src={data?.imageId ? IMG_CDN_URL + data?.imageId : null}
                  alt="fssai-IMG"
                  className="h-6"
                />
                <p>{data?.text}</p>
              </div>
              <div>
                <p className="text-slate-700 font-medium ">{data?.name}</p>
                <p className="text-sm text-slate-600">
                  {data?.area ? "( Outlet:" + data?.area + ")" : false}
                </p>

                <p className="text-xs text-slate-500 py-3">
                  {data?.completeAddress}
                </p>
              </div>
            </div>
          );
        })} */}
    </div>
  );
};

export default Menucategories;
