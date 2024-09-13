import { NavLink} from "react-router-dom";
import icon from "../../images/icons.svg";
import css from "./Navigation.module.css";
import clsx from "clsx";

function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  return (
    <nav className={css.link}>
      <svg className={css.svgIcon}>
        <use href={`${icon}#icon-logo`} />
      </svg>
      <div className={css.navLink}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
      </div>
    </nav>
  );
}

export default Navigation;
