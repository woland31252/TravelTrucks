import { useSelector } from "react-redux";
import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";
import CamperList from "../CamperList/CamperList.jsx";
import css from "./Collection.module.css";


const Collection = () => {
  const campers = useSelector(selectorsCampers);
  return (
    <>
      <ul className={css.collectionList}>
        {campers.map((item) => (
          <li key={item.id}>
            <CamperList item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Collection;
