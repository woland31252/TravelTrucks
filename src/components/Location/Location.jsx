import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { togleLocationFilter } from "../../redux/filterCamper/sliceFilterCamper.js";
import { selectorsLocation } from "../../redux/camper/selectorsCamper.js";
import { selectLocationCampers } from "../../redux/filterCamper/selectorsFilterCamper.js";
import icon from "../../images/icons.svg";
import css from "./Location.module.css";

function Location() {
  const id = useId();
  const optionId = useId();
  const dispatch = useDispatch();
  const location = useSelector(selectorsLocation);
  const selectedLocation = useSelector(selectLocationCampers);
  console.log(location);

  const handleChange = (e) => {
    dispatch(togleLocationFilter(e.target.value));
    console.log(e.target.value);
    console.log("location: ", selectedLocation);
  };
  return (
    <form className={css.location} onChange={handleChange}>
      <label className={css.locationLabel} htmlFor={id}>
        Location
      </label>
      <select className={css.inputLocation} id={id} name="location" autoFocus>
        {location.map((elem, index) => (
          <option key={optionId + `${index}`} value={elem}>
            {elem}
          </option>
        ))}
      </select>
      <svg className={css.svgIcon}>
        <use href={`${icon}#icon-map`} />
      </svg>
    </form>
  );
}

export default Location;
