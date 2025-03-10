
import { useId } from "react";
import { useSelector } from "react-redux";
import { selectorsLocation } from "../../redux/camper/selectorsCamper.js";
import icon from "../../images/icons.svg";
import css from "./Location.module.css";

function Location() {
  const id = useId();
  const optionId = useId();
  const location = useSelector(selectorsLocation);
  console.log(location);

  const handleChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <form className={css.location} onChange={handleChange}>
      <label className={css.locationLabel} htmlFor={id}>
        Location
      </label>
      <select className={css.inputLocation} id={id} name="location" autoFocus>
        {location.map((elem) => (
          <option key={optionId} value={elem}>
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
