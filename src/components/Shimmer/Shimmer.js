import { AiOutlineLoading } from "react-icons/ai";
let Shimmer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gray-100 xs:py-2 sm:my-1">
        <AiOutlineLoading size={30} className="animate-spin" />
        <p className="py-1 text-3xl font-medium text-lightgreen">
          Looking for great food...
        </p>
      </div>
      <div className="flex flex-wrap xs:px-8 ss:px-24 sm:px-6 md:px-20 lg:px-4 xl:px-14 rounded animate-pulse">
        {Array(16)
          .fill("")
          .map((e, indx) => (
            <div className="m-1" key={indx}>
              <p className="w-72 h-40 bg-lightgray "></p>
              <p className="my-3 w-32 h-2 bg-lightgray "></p>
              <p className="my-3 w-24 h-2 bg-lightgray "></p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
