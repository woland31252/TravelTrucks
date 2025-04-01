import { useSelector } from "react-redux";
import { selectorsCamperById } from "../../redux/camper/selectorsCamper";
import icon from "../../images/icons.svg";
import css from "../FeaturesCamper/FeaturesCamper.module.css";

function FeaturesCamper() {
  const camper = useSelector(selectorsCamperById);
  return (
    <>
      <div className={css.camperFeaturesContainer}>
        <div className={css.camperProperties}>
          <div className={css.camperPropertieContainer}>
            <svg className={css.iconProperties}>
              <use href={`${icon}#icon-diagram`} />
            </svg>
            <p className={css.camperPropertiesItem}>{camper.transmission}</p>
          </div>
          <div className={css.camperPropertieContainer}>
            <svg className={css.iconProperties}>
              <use href={`${icon}#icon-fuel-pump`} />
            </svg>
            <p className={css.camperPropertiesItem}>{camper.engine}</p>
          </div>
          {camper.kitchen ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-cup-hot`} />
              </svg>
              <p className={css.camperPropertiesItem}>kitchen</p>
            </div>
          ) : null}
          {camper.AC ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-wind`} />
              </svg>
              <p className={css.camperPropertiesItem}>AC</p>
            </div>
          ) : null}
          {camper.bathroom ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-bi-droplet20`} />
              </svg>
              <p className={css.camperPropertiesItem}>bathroom</p>
            </div>
          ) : null}
          {camper.TV ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-tv20`} />
              </svg>
              <p className={css.camperPropertiesItem}>TV</p>
            </div>
          ) : null}
          {camper.radio ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-ui-radios`} />
              </svg>
              <p className={css.camperPropertiesItem}>radio</p>
            </div>
          ) : null}
        </div>
        <h3 className={css.titleFeatures}>Vehicle details</h3>
        <hr className={css.lineAfterTitle} />
        <div className={css.vehicleList}>
          <p className={css.vehicleItem}>
            Form<span>{camper.form}</span>
          </p>
          <p className={css.vehicleItem}>
            {" "}
            Length<span>{camper.length}</span>
          </p>
          <p className={css.vehicleItem}>
            Width<span>{camper.width}</span>
          </p>
          <p className={css.vehicleItem}>
            Height<span>{camper.height}</span>
          </p>
          <p className={css.vehicleItem}>
            Tank<span>{camper.tank}</span>
          </p>
          <p className={css.vehicleItem}>
            Consumption<span>{camper.consumption}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default FeaturesCamper;
