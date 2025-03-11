import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togleLocationFilter } from "../../redux/filterCamper/sliceFilterCamper.js";
import { selectorsLocation } from "../../redux/camper/selectorsCamper.js";
import LocationList from "../LocationList/LocationList.jsx";
import icon from "../../images/icons.svg";
import css from "./Location.module.css";

function Location() {
  const id = useId();
  const dispatch = useDispatch();
  const data = useSelector(selectorsLocation);

  console.log("data: ", data);

  const handleChange = (e) => {
    dispatch(togleLocationFilter(e.target.value));
  };
  return (
    <form className={css.location} onChange={handleChange}>
      <label className={css.locationLabel} htmlFor={id}>
        Location
      </label>
      <select
        className={css.inputLocation}
        id={id}
        name="location"
        autoFocus
        defaultValue="Location"
      >
        <option disabled="disabled">Location</option>
        {data.map((elem) => (
          <LocationList key={elem} LocationElem={elem} />
        ))}
      </select>
      <svg className={css.svgIcon}>
        <use href={`${icon}#icon-map`} />
      </svg>
    </form>
  );
}

export default Location;
