import { useEffect, useState } from "react";
import { SUB_CAROUSEL_ITEM_URL } from "../constant";

const useSubCarouselData = (collectionid) => {
  // console.log(collectionid);
  const [collectionItem, setCollectionItem] = useState([]);

  useEffect(() => {
    getSubCarouselData();
  }, []);

  async function getSubCarouselData() {
    try {
      const data = await fetch(
        SUB_CAROUSEL_ITEM_URL +
          collectionid +
          "&tags=layout_CCS_Idli&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      if (data.status !== 200) {
        throw new Error("API Error");
      } else {
        const json = await data.json();
        // console.log(json?.data?.cards);
        setCollectionItem(json?.data?.cards);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { collectionItem };
};

export default useSubCarouselData;
