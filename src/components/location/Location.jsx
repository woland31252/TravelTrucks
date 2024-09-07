import icon from "../../images/icons.svg";
import { useId } from "react";
import css from "../location/Location.module.css";

function Location() {
  const id = useId();
  return (
    <div className={css.location}>
      <label className={css.locationLabel} htmlFor={id}>
        Location
      </label>
      <input type="text" className={css.inputLocation} id={id} placeholder="Kyiv, Ukraine"/>
      <svg className={css.svgIcon}>
        <use href={`${icon}#icon-map`} />
      </svg>
    </div>
  );
}

export default Location;
