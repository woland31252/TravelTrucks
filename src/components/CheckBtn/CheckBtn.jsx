import css from "../CheckBtn/CheckBtn.module.css";

function ChekBtn({ id, name, type, children }) {
  return (
    <label className={css.checkbox} htmlFor={id}>
      <input className={css.checkboxInput} type={type} name={name} id={id} />
      <div className={css.checkboxNew} aria-hidden="true">
        {children}
      </div>
    </label>
  );
}

export default ChekBtn;
