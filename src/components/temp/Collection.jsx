import { useSelector } from "react-redux";
import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";
import CamperList from "../CamperList/CamperList.jsx";
import css from "./Collection.module.css";
// import { selectorsFilterCampers } from "../../redux/camper/selectorsCamper.js";

const Collection = () => {
  const campers = useSelector(selectorsCampers);
  // const campers = useSelector(selectorsFilterCampers);

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
