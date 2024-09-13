// import { Link, Outlet } from "react-router-dom";
// import { Reviews} from "../../components/ReviewsCampers/ReviewsCampers.jsx";
// import {Features} from "../../components/FeaturesCamper/FeaturesCamper.jsx";
import { AppBar } from "../../components/AppBar/AppBar";

export const CamperPage = () => {
  return (
    <>
    <AppBar/>
    <div>
      <h2>CamperPage</h2>
      {/* <ul>
        <li>
          <Link to="features">
            <Features />
          </Link>
        </li>
        <li>
          <Link to="reviews">
            <Reviews />
          </Link>
        </li>
        <Outlet />
      </ul> */}
    </div>
    </>
    
  );
};
