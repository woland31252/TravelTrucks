import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";


 function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active);
  };

  return (
    <nav className={css.link}>
      <div className={css.logo}>
        <img src="/src/images/Logos.jpg" alt="Logotype" width="136" height="16"/>
      </div>
      <div className={css.navLink}>
        <NavLink to="/" className={buildLinkClass}>Home</NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>Catalog</NavLink>
      </div>
      
    </nav>
  )
};

export default Navigation;
