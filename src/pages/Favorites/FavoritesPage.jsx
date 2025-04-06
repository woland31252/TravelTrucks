import { useDispatch, useSelector } from "react-redux";
import { selectorsFavorite } from "../../redux/camper/selectorsCamper";

import Location from "../../components/Location/Location.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "../Favorites/FavoritesPage.module.css";
import FavoriteCollection from "../../components/FavoriteCollection/FavoriteCollection.jsx";


function FavoritesPage() {
  const dispatch = useDispatch();
  const favorite = useSelector(selectorsFavorite);



  console.log("favPage: ", favorite);

  return (
    <>
      <div className={css.favoritesPageContainer}>
        <div className={css.favoritesSearchContainer}>
          <Location />
          <Filters />
        </div>
        <div className={css.favoritesPageCampers}>
          <FavoriteCollection />
        </div>
      </div>
    </>
  );
}

export default FavoritesPage;
