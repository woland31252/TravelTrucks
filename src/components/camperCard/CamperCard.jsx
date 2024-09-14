import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Reviews from "../../components/ReviewsCampers/ReviewsCampers.jsx";
import Features from "../../components/FeaturesCamper/FeaturesCamper.jsx";
import BookingForm from "../BookingForm/BookingForm.jsx";
import { selectorsCamperById } from "../../redux/camper/selectorsCamper.js";
import icon from "../../images/icons.svg";
import css from "../CamperCard/CamperCard.module.css";

function CamperCard() {
  const camper = useSelector(selectorsCamperById);
  return (
    <div className={css.camperCardContainer}>
      <h2 className={css.titleCamperCard}>{camper.name}</h2>
      <div>
        <p className={css.ratingCamperCard}>
          {camper.rating}({camper.reviews.length}Reviews)
        </p>
        <p className={css.locationCamperCard}>{camper.location}</p>
      </div>
      <p className={css.priceCamperCard}>€{camper.price.toFixed(2)}</p>
      <div className={css.imgCamperCardContainer}>
        <img
          className={css.imgCamperCard}
          src={camper.gallery[0].thumb}
          alt="The camper"
        />
        <img
          className={css.imgCamperCard}
          src={camper.gallery[1].thumb}
          alt="The camper"
        />
        <img
          className={css.imgCamperCard}
          src={camper.gallery[2].thumb}
          alt="The camper"
        />
      </div>
      <p className={css.descriptionCamper}>{camper.description}</p>
      <div>
        <ul>
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
        </ul>
      </div>
      <div>
        <BookingForm />
      </div>
    </div>
  );
}

export default CamperCard