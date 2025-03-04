import { useSelector } from "react-redux";
import { selectorsCampers } from "../../redux/camper/selectorsCamper";
import css from "../LocationList/LocationList.module.css";

function LocationList() {
    const items = useSelector(selectorsCampers);
    console.log(items)
  return (
    <>
      
    {items.map((data) => { <option value={data.location}> {data.location}</option> })}
      
    </>
  );
}

export default LocationList;
