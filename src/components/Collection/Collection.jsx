import { useSelector } from "react-redux";
import {
  selectorsCampers,
  selectorsFavorite,
} from "../../redux/camper/selectorsCamper.js";
import CamperList from "../CamperList/CamperList.jsx";
import css from "./Collection.module.css";

const Collection = () => {
  const campers = useSelector(selectorsCampers);
  const favorites = useSelector(selectorsFavorite);
  return (
    <>
      <ul className={css.collectionList}>
        {campers.map((item) => (
          <li key={item.id}>
            <CamperList
              item={item}
              favorites={favorites}
              isFavorite={favorites.some((elem) => elem.id === item.id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Collection;
