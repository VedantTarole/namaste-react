import Cards from "./Rest-card";

import { useEffect, useState } from "react";

const Body = () => {
  let [resList, setResList] = useState([]);
  let [data1, setdata1] = useState([]);
  useEffect(() => {
    dataFetch();
  }, []);
  const dataFetch = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const x = await data.json();

    setdata1(
      x?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResList(
      x?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return (
    <div className="Body">
      <div className="search">
        <button
          className="top-res"
          onClick={() => {
            filteredList = data1.filter((x) => {
              return x.info.avgRating >= 4;
            });
            if (resList === data1) setResList(filteredList);
            else setResList(data1);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map(function (naam) {
          return <Cards resData={naam} />;
        })}
      </div>
    </div>
  );
};
export default Body;
