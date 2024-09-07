import css from "./Error404.module.css";

function Error404 ({children}) {
  return (
      <div className={css.error404}>
        <h1 data-t="404" className={css.titleError}>
          404
        </h1>
        {children}
      </div>
  );
}

export default Error404;