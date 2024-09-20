// import clsx from "clsx";
import css from "./NotFoundPage.module.css";
import Error404 from "../../components/Error404/Error404.jsx";

function NotFoundPage() {
  return (
    <>
      <Error404>
        <p className={css.messageError}>Page not found</p>
      </Error404>
    </>
  );
}

export default NotFoundPage;
