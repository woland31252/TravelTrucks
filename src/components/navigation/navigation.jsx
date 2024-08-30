import { NavLink } from "react-router-dom";
import css from "./navigation.module.css";
import clsx from "clsx";

 function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.link}>
      <NavLink to="/" className={buildLinkClass}>Home</NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>Catalog</NavLink>
    </nav>
  )
};

export default Navigation;
