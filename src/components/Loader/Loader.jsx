import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loaderComtainer}>
      <div className={css.customLoader}></div>
    </div>
  );
}

export default Loader;
