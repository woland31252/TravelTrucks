import Navigation from "../Navigation/Navigation.jsx";
import css from "../AppBar/AppBar.module.css";

export function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
