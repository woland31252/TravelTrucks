import { togleFavorite } from "../../redux/camper/sliceCamper.js";
import { useDispatch, useSelector} from "react-redux";
import { selectorsFavorite } from "../../redux/camper/selectorsCamper.js";
import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";

import { Link } from "react-router-dom";
import icon from "../../images/icons.svg";
import css from "./CamperList.module.css";
import Button from "../Button/Button.jsx";


function CamperList({
  item: {
    id,
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
  },
}) {
  const dispatch = useDispatch();
  const favorite = useSelector(selectorsFavorite);
  const campers = useSelector(selectorsCampers);

  const createFavoriteList = () => {
    const [item] = campers.filter((item) => item.id === id);
    const favorites = favorite.includes(item) ? favorite.filter((elem) => elem !== item) : [...favorite, item];
    dispatch(togleFavorite(favorites));
    console.log("favorite", favorite);
  }
  console.log("favorite1", favorite);
  return (
    <div className={css.camperCardContainer}>
      <div className={css.imgCamperContainer}>
        <img
          className={css.imgCamperCard}
          src={gallery[0].thumb}
          alt="The camper"
        />
      </div>
      <div className={css.informCamperContainer}>
        <div className={css.camperTitlePrice}>
          <h2 className={css.camperTitle}>{name}</h2>
          <div className={css.camperPriceContainer}>
            <p className={css.camperPrice}>€{price.toFixed(2)}</p>
            <Button type="button" variant="iconHeartButton" onClick={createFavoriteList}>
              <svg className={css.iconHeart}>
                <use href={`${icon}#icon-heart`} />
              </svg>
            </Button>
          </div>
        </div>
        <div className={css.camperRatingLocation}>
          <div className={css.camperRatingContainer}>
            <svg className={css.iconStar}>
              <use href={`${icon}#icon-star`} />
            </svg>
            <p className={css.camperRating}>
              {rating}
              <span>({reviews.length}Reviews)</span>
            </p>
          </div>

          <p className={css.camperLocation}>
            <svg className={css.iconMap}>
              <use href={`${icon}#icon-map`} />
            </svg>
            {location}
          </p>
        </div>
        <p className={css.camperDescription}>{description}</p>
        <div className={css.camperProperties}>
          <div className={css.camperPropertieContainer}>
            <svg className={css.iconProperties}>
              <use href={`${icon}#icon-diagram`} />
            </svg>
            <p className={css.camperPropertiesItem}>{transmission}</p>
          </div>
          <div className={css.camperPropertieContainer}>
            <svg className={css.iconProperties}>
              <use href={`${icon}#icon-fuel-pump`} />
            </svg>
            <p className={css.camperPropertiesItem}>{engine}</p>
          </div>
          {kitchen ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-cup-hot`} />
              </svg>
              <p className={css.camperPropertiesItem}>Kitchen</p>
            </div>
          ) : null}
          {AC ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-wind`} />
              </svg>
              <p className={css.camperPropertiesItem}>AC</p>
            </div>
          ) : null}
          {bathroom ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-bi-droplet20`} />
              </svg>
              <p className={css.camperPropertiesItem}>bathroom</p>
            </div>
          ) : null}
          {TV ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-tv20`} />
              </svg>
              <p className={css.camperPropertiesItem}>TV</p>
            </div>
          ) : null}
          {radio ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-ui-radios`} />
              </svg>
              <p className={css.camperPropertiesItem}>radio</p>
            </div>
          ) : null}
        </div>
        <Link to={`/catalog/${id}`}>
          <Button type="button" variant="showMore">
            Show more
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CamperList;
