import "./Center.css";

// Importing Functions
import CenterTop from "./Center-top/Center-top";
import CenterDollie from "./Center-dollie/Dollie";
import CenterRecommended from "./Center-recommended/Recommended";
import FoodAndDrink from "./Center-food-drink/Food-drink";

function Center() {
  return (
    <div className="center p-3">
      <div className="row">
        <div className="col-12">{<CenterTop />}</div>
      </div>

      <div className="row">
        <div className="col-12">{<CenterDollie />}</div>
      </div>
      <div className="row">
        <div className="col-12">{<CenterRecommended />}</div>
      </div>
      <div className="row">
        <div className="col-12">{<FoodAndDrink />}</div>
      </div>
    </div>
  );
}

export default Center;
