import icon from '../../images/icons.svg';
import css from '../location/Location.module.css'

function Location() {
  return (
    <div className={css.location}>
      <h2>Location</h2>
      <svg className={css.svgIcon}>
        <use href={`${icon}#icon-map`} />
      </svg>
    </div>
  );
}

export default Location;
