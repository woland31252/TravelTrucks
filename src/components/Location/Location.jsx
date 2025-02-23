import icon from "../../images/icons.svg";
import { useId } from "react";
import css from "./Location.module.css";

function Location({ item: {
  location,
} }) {
  const id = useId();
  return (
    <div className={css.location}>
      <label className={css.locationLabel} htmlFor={id}>
        Location
      </label>
      <input
        type="input"
        className={css.inputLocation}
        id={id}
        value={<p>{location}</p>}
        placeholder="Kyiv, Ukraine"
      />
      <svg className={css.svgIcon}>
        <use href={`${icon}#icon-map`} />
      </svg>
    </div>
  );
}

export default Location;
