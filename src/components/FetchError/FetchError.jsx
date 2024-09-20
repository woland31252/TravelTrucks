import Error404 from "../Error404/Error404.jsx";
import css from "./FetchError.module.css";

function FetchError() {
  return (
    <>
      <Error404>
        <p className={css.messageError}>Request not found</p>
      </Error404>
    </>
  );
}

export default FetchError;
