import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toglePage } from "../../redux/camper/sliceCamper.js";
import {
  togleLocationFilter,
  resetFilter,
} from "../../redux/filterCamper/sliceFilterCamper.js";
import { selectorsLocation } from "../../redux/camper/selectorsCamper.js";
import LocationList from "../LocationList/LocationList.jsx";
import icon from "../../images/icons.svg";
import css from "./Location.module.css";

function Location() {
  const id = useId();
  const dispatch = useDispatch();
  const data = useSelector(selectorsLocation);

  const handleChange = (e) => {
    dispatch(resetFilter());
    dispatch(toglePage(1));
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
        <option disabled="disabled">City</option>
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
