import { ICON_URL } from "../constant";
import { Link } from "react-router-dom";

const SubCarousel = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex gap-5 overflow-auto scroll-smooth scrollbar">
      {data?.gridElements?.infoWithStyle?.info?.map((item) => {
        // console.log(item);

        // --------------------   Get Entity Id From URL ------------------------

        const url = item?.entityId;
        let collectionId;

        // Function to extract collection_id
        function extractCollectionId(url) {
          const match = url.match(/collection_id=(\d+)/) || url.length <= 5;
          // console.log(match);
          if (match && match[1]) {
            return match[1];
          }
          return url;
        }

        // Call the function to extract collection_id
        collectionId = extractCollectionId(url);

        return (
          <Link key={item.id} to={`/collection/${collectionId}`}>
            <div className="flex xs:w-28 sm:w-[8.5rem]">
              <img
                className="w-full"
                src={ICON_URL + item.imageId}
                alt={item?.action?.text}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SubCarousel;
