import Cards from "./Rest-card";

import resObj from "../utils/mockdata";

const Body = () => {
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map(function (naam) {
          return <Cards resData={naam} />;
        })}
      </div>
    </div>
  );
};
export default Body;
