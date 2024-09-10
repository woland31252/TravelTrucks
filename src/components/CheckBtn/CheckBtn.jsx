import css from "../CheckBtn/CheckBtn.module.css";

function ChekBtn({ id, children }) {
  return (
    <label className={css.checkbox}>
      <input className={css.checkboxInput} type="checkbox" id={id} />
      <div className={css.checkboxNew} aria-hidden="true">
        {children}
      </div>
    </label>
  );
}

export default ChekBtn;
