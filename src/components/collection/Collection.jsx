import { useSelector } from "react-redux";
import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";
import CamperCard from "../CamperCard/CamperCard.jsx";

const Collection = () => {
  const campers = useSelector(selectorsCampers);

  return (
    <ul>
      {campers.map(item => (
        <li key={item.id}>
          <CamperCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default Collection;
