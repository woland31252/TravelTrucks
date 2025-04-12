
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import icon from "../../images/icons.svg";
import css from "./CamperList.module.css";
import Button from "../Button/Button.jsx";


function CamperList({item}) {
  
  const [isFavorite, setIsFavorite] = useState(() => { 
    const savedFavorite = window.localStorage.getItem("saved-favorite");
    if (savedFavorite !== null) {
      return JSON.parse(savedFavorite);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-favorite", JSON.stringify(isFavorite));
  }, [isFavorite]);
  
  const buildBtnClass = clsx(
      css.favoriteBtn,
      isFavorite && css.favoriteBtnActive
    );

  const createFavoriteList = (camper) => {
    let objFav = []
    objFav.push(camper)
    setIsFavorite(objFav);
  }
  console.log(isFavorite)
  return (
    <div className={css.camperCardContainer}>
      <div className={css.imgCamperContainer}>
        <img
          className={css.imgCamperCard}
          src={item.gallery[0].thumb}
          alt="The camper"
        />
      </div>
      <div className={css.informCamperContainer}>
        <div className={css.camperTitlePrice}>
          <h2 className={css.camperTitle}>{item.name}</h2>
          <div className={css.camperPriceContainer}>
            <p className={css.camperPrice}>€{item.price.toFixed(2)}</p>
            <button
              type="button"
              className={buildBtnClass}
              onClick={() => createFavoriteList(item)}
            >
              <svg className={css.iconHeart}>
                <use href={`${icon}#icon-heart`} />
              </svg>
            </button>
          </div>
        </div>
        <div className={css.camperRatingLocation}>
          <div className={css.camperRatingContainer}>
            <svg className={css.iconStar}>
              <use href={`${icon}#icon-star`} />
            </svg>
            <p className={css.camperRating}>
              {item.rating}
              <span>({item.reviews.length}Reviews)</span>
            </p>
          </div>

          <p className={css.camperLocation}>
            <svg className={css.iconMap}>
              <use href={`${icon}#icon-map`} />
            </svg>
            {item.location}
          </p>
        </div>
        <p className={css.camperDescription}>{item.description}</p>
        <div className={css.camperProperties}>
          <div className={css.camperPropertieContainer}>
            <svg className={css.iconProperties}>
              <use href={`${icon}#icon-diagram`} />
            </svg>
            <p className={css.camperPropertiesItem}>{item.transmission}</p>
          </div>
          <div className={css.camperPropertieContainer}>
            <svg className={css.iconProperties}>
              <use href={`${icon}#icon-fuel-pump`} />
            </svg>
            <p className={css.camperPropertiesItem}>{item.engine}</p>
          </div>
          {item.kitchen ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-cup-hot`} />
              </svg>
              <p className={css.camperPropertiesItem}>Kitchen</p>
            </div>
          ) : null}
          {item.AC ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-wind`} />
              </svg>
              <p className={css.camperPropertiesItem}>AC</p>
            </div>
          ) : null}
          {item.bathroom ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-bi-droplet20`} />
              </svg>
              <p className={css.camperPropertiesItem}>bathroom</p>
            </div>
          ) : null}
          {item.TV ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-tv20`} />
              </svg>
              <p className={css.camperPropertiesItem}>TV</p>
            </div>
          ) : null}
          {item.radio ? (
            <div className={css.camperPropertieContainer}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-ui-radios`} />
              </svg>
              <p className={css.camperPropertiesItem}>radio</p>
            </div>
          ) : null}
        </div>
        <Link to={`/catalog/${item.id}`}>
          <Button type="button" variant="showMore">
            Show more
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CamperList;
