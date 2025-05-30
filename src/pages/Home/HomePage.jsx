import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import Button from "../../components/Button/Button.jsx";

function HomePage() {
  return (
    <div className={css.homeSection}>
      <div className={css.homeTitleBox}>
        <h1 className={css.homeTitle}>Campres of your dreams</h1>
        <h2 className={css.homeItem}>
          You can find everything you want in our catalog
        </h2>
        <Link to="/catalog">
          <Button type="button">View Now</Button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
