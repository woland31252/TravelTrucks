import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm.jsx";
import { Suspense } from "react";
import Loader from "../Loader/Loader.jsx";
import ImageTumbGallery from "../ImageTumbGallery/ImageTumbGallery.jsx";
import { selectorsCamperById } from "../../redux/camper/selectorsCamper.js";
import icon from "../../images/icons.svg";
import css from "../CamperCard/CamperCard.module.css";

function CamperCard() {
  const camper = useSelector(selectorsCamperById);
    return (
    <div className={css.camperCardContainer}>
      <h2 className={css.titleCamperCard}>{camper.name}</h2>
      <div className={css.ratingLocationContainer}>
        <div className={css.ratingContainer}>
          <svg className={css.iconStar}>
            <use href={`${icon}#icon-star`} />
          </svg>
          <p className={css.ratingCamperCard}>
            {camper.rating}({camper.reviews.length}Reviews)
          </p>
        </div>
        <div className={css.locationContainer}>
          <svg className={css.iconMap}>
            <use href={`${icon}#icon-map`} />
          </svg>
          <p className={css.locationCamperCard}>{camper.location}</p>
        </div>
      </div>
      <p className={css.priceCamperCard}>€{camper.price.toFixed(2)}</p>
      <div className={css.imgCamperCardContainer}>
        <ImageTumbGallery/>
      </div>
      <p className={css.descriptionCamper}>{camper.description}</p>
      <div className={css.linkListCamperCard}>
        <NavLink to="features" className={css.linkFeatures}>
          <h3>Features</h3>
        </NavLink>
        <NavLink to="reviews" className={css.linkFeatures}>
          <h3>Reviews</h3>
        </NavLink>
      </div>
      <hr className={css.lineBeforeLink}></hr>

      <div className={css.bookingForm}>
        <Suspense fallback={<Loader/>}>
          <Outlet />
          <BookingForm />
        </Suspense>
      </div>
    </div>
  );
}

export default CamperCard;
