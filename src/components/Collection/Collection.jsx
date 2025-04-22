import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resetItems } from "../../redux/camper/sliceCamper.js";
import {
  selectorsFavorite,
} from "../../redux/camper/selectorsCamper.js";
import CamperList from "../CamperList/CamperList.jsx";
import css from "./Collection.module.css";

const Collection = ({ camperItems }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectorsFavorite);
  
  useEffect(() => {
    dispatch(resetItems)
  }, []);

  return (
    <>
      <ul className={css.collectionList}>
        {camperItems.map((item) => (
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
