let Shimmer = () => {
  return (
    <div className="flex flex-wrap xs:px-8 ss:px-24 sm:px-2 md:px-16 lg:px-4 xl:px-6 rounded animate-pulse">
      {Array(16)
        .fill("")
        .map((e, indx) => (
          <div className="m-3" key={indx}>
            <p className="w-72 h-40 bg-gray-300 "></p>
            <p className="my-3 w-32 h-2 bg-gray-300 "></p>
            <p className="my-3 w-24 h-2 bg-gray-300 "></p>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
