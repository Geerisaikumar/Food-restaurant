import SearchErrorImg from "../../Images/SearchError.png";
export function Filterdata(SearchTxt, AllRestaurants) {
  return AllRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(SearchTxt.toLowerCase())
  );
}

export const SearchErrorPage = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-14">
      <img src={SearchErrorImg} alt={"SearchErrorImg"} />
      <h1 className="py-8 text-2xl">Sorry, no results found!</h1>
      <p className="text-xl text-gray-500">
        Please check the spelling or try searching for something else
      </p>
    </div>
  );
};
