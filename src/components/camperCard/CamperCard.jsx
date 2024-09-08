import css from "./CamperCard.module.css";
import Button from "../Button/Button.jsx";

function CamperCard({
  item: {
    name,
    price,
    rating,
    location,
    transmission,
    engine,
    AC,
    kitchen,
    gallery,
    reviews,
    description,
    bathroom,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  },
}) {
  return (
    <div className={css.camperCardContainer}>
      <div className={css.imgCamperContainer}>
        <img className={css.imgCamperCard} src={gallery[0].thumb} />
      </div>
      <div className={css.informCamperContainer}>
        <div className={css.camperTitlePrice}>
          <h2 className={css.camperTitle}>{name}</h2>
          <p className={css.camperPrice}>€{price.toFixed(2)}</p>
        </div>
        <div className={css.camperRatingLocation}>
          <p className={css.camperRating}>
            {rating}
            <span>({reviews.length}Reviews)</span>
          </p>
          <p className={css.camperLocation}>{location}</p>
        </div>
        <p className={css.camperDescription}>{description}</p>
        <div className={css.camperProperties}>
          <p className={css.camperPropertiesItem}>{transmission}</p>
          <p className={css.camperPropertiesItem}>{engine}</p>
          {kitchen ? <p className={css.camperPropertiesItem}>Kitchen</p> : null}
          {AC ? <p className={css.camperPropertiesItem}>AC</p> : null}
          {bathroom ? (
            <p className={css.camperPropertiesItem}>bathroom</p>
          ) : null}
          {TV ? <p className={css.camperPropertiesItem}>TV</p> : null}
          {radio ? <p className={css.camperPropertiesItem}>radio</p> : null}
          {refrigerator ? (
            <p className={css.camperPropertiesItem}>refrigerator</p>
          ) : null}
          {microwave ? (
            <p className={css.camperPropertiesItem}>microwave</p>
          ) : null}
          {gas ? <p className={css.camperPropertiesItem}>gas</p> : null}
          {water ? <p className={css.camperPropertiesItem}>water</p> : null}
        </div>

        <Button>Show more</Button>
      </div>
    </div>
  );
}

export default CamperCard;
