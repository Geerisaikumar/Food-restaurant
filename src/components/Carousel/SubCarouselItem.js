import { Link, useParams } from "react-router-dom";
import useSubCarouselData from "../utils/useSubCarouselData";
import Restaurantcard from "../Restaurantcard";
import CarouselItemShimmer from "../Shimmer/CarouselItemShimmer";

const SubCarouselItem = () => {
  const { collectionid } = useParams();
  const { collectionItem } = useSubCarouselData(collectionid);
  console.log(collectionItem);
  return collectionItem?.length === 0 ? (
    <CarouselItemShimmer />
  ) : (
    <div className="flex flex-col flex-wrap xs:px-8 ss:px-24 sm:px-4 md:px-20 lg:px-8 xl:px-16">
      <div className="mt-5 pl-5">
        <h2 className="xs:text-3xl sm:text-4xl font-bold text-black/80">
          {collectionItem ? collectionItem[0]?.card?.card?.title : ""}
        </h2>
        <p className="sm:text-lg text-gray-500 my-3">
          {collectionItem ? collectionItem[0]?.card?.card?.description : ""}
        </p>
      </div>
      <div className="flex flex-wrap ">
        {collectionItem &&
          collectionItem.map((item, indx) => {
            const { info } = item?.card?.card;
            // console.log(info);

            return (
              <Link key={indx} to={"/restaurant/" + info?.id}>
                {info && <Restaurantcard restaurant={info} />}
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default SubCarouselItem;
