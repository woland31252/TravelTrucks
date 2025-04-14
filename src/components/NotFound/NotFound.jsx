import clsx from "clsx";
import css from "./NotFound.module.css";

function NotFound({ isError, notFound }) {
  const notFoudStyle = clsx(
    css.notFoundContainerTrue,
    isError || notFound && css.notFoundContainerFalse
  );
  return (
    <div className={notFoudStyle}>
      <p className={css.notFoudItem}>Nothing not found!</p>
    </div>
  );
}

export default NotFound;
