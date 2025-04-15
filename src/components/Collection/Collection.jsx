// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  // selectorsCampers,
  selectorsFavorite,
} from "../../redux/camper/selectorsCamper.js";
import CamperList from "../CamperList/CamperList.jsx";
import css from "./Collection.module.css";

const Collection = ({ camperItems }) => {
  // const campers = useSelector(selectorsCampers);
  const favorites = useSelector(selectorsFavorite);
  // const [campers, setCampers] = useState([]);

  // useEffect(() => {
  //   setCampers([]);
  // }, []);

  // useEffect(() => {
  //    setCampers((campers) => [...campers, ...camperItems]);
  // }, [camperItems])
  
  
  
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
