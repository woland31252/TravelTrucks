import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines
        height="96"
        width="96"
        color="grey"
        stroke-width="5"
        animation-duration="0.75"
      />
    </div>
  );
}

export default Loader;
