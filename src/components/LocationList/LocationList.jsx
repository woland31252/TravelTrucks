import { useSelector } from "react-redux";
import { useId } from "react";
import { selectorsLocation } from "../../redux/camper/selectorsCamper";
import css from "../LocationList/LocationList.module.css";

function LocationList() {
  const locationId = useId();
  const location = useSelector(selectorsLocation);
  console.log(location);
  return (
    <>
      {location.map((elem) => {<option key={locationId } value={elem}>{elem}</option>})}
    </>
  )
}

export default LocationList;
