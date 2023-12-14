import { CDN_url } from "../utils/constants";

const Cards = (props) => {
  const { resData } = props;
  return (
    <div className="card">
      <img
        className="res-logo"
        src={CDN_url + resData.info.cloudinaryImageId}
      />
      <h2>{resData.info.name}</h2>
      <p className="cuisines">{resData.info.cuisines.join(", ")}</p>
      <p>{resData.info.avgRating + " stars"}</p>
      <p>{resData.info.costForTwo}</p>
    </div>
  );
};
export default Cards;
