import css from "../CheckBtn/CheckBtn.module.css";

function ChekBtn({ id, name, type, value, children }) {
  return (
    <label className={css.checkbox} htmlFor={id}>
      <input
        className={css.checkboxInput}
        id={id}
        name={name}
        type={type}
        value={value}
      />
      <div className={css.checkboxNew} aria-hidden="true">
        {children}
      </div>
    </label>
  );
}

export default ChekBtn;
