import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="display flex flex-col xs:mx-5 ss:mx-10 sm:mx-20 md:mx-44 lg:mx-32 xl:mx-60 animate-pulse">
      <div className="py-5 border-b-2 border-dashed ">
        <h1 className="bg-lightgray w-48 h-5 my-2"></h1>
        <p className="bg-lightgray py-1 w-20 h-2 "></p>
        <p className="bg-lightgray  w-24 h-2 my-2"></p>
      </div>
      {Array(16)
        .fill("")
        .map((e, indx) => (
          <div
            key={indx}
            className="flex justify-between py-3 border-gray-400 border-b "
          >
            <div className="">
              <h3 className="p-1 bg-lightgray w-44 h-4"></h3>
              <h3 className="p-1 bg-lightgray lg:text-lg w-16 h-3 my-3"></h3>
            </div>

            <p className=" xs:px-2 xs:py-0 sm:px-5 lg:px-8 sm:py-1 xs:w-24 xs:h-16 md:w-44 md:h-24 border bg-lightgray"></p>
          </div>
        ))}
    </div>
  );
};

export default ShimmerMenu;
