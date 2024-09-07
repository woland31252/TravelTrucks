import { useSelector } from "react-redux";
import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";
import CamperCard from "../camperCard/CamperCard.jsx";
import css from "../collection/Collection.module.css";

function Collection() {
  const campers = useSelector(selectorsCampers);
  return (
    <ul>
      {campers.map((camper) => (
        <li key={camper.id} className={css.camperItem}>
          <CamperCard camperItem={camper}/>
        </li>
      ))}
    </ul>
  )
}

export default Collection;
