import { useSelector } from "react-redux";
import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";
import CamperList from "../CamperList/CamperList.jsx";
import css from "./Collection.module.css";
// import { selectFilteredCampers } from "../../redux/camper/selectorsCamper.js";

const Collection = () => {
  const campers = useSelector(selectorsCampers);
  // const filtered = useSelector(selectFilteredCampers);

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
