import { CDN_url } from "../utils/constants";

const Cards = (props) => {
  const { resData } = props;
  return (
    <div className="card">
      <img
        className="res-logo"
        src={CDN_url + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h5>{resData.info.avgRating + " stars"}</h5>
      <h6>{resData.info.costForTwo}</h6>
    </div>
  );
};
export default Cards;
