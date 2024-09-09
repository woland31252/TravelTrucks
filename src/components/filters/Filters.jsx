import icon from '../../images/icons.svg';
import css from "../Filters/Filters.module.css";

function Filters() {
  return (
    <div>
      <p>Filters</p>
      <h2 className={css.titleList}>Vehicle equipment</h2>
      <div className={css.listContainer}>
        <ul className={css.listFilters}>
          <li className={css.itemFilter}>Disel</li>
          <li className={css.itemFilter}>Petrol</li>
          <li className={css.itemFilter}>Hibrid</li>
          <li className={css.itemFilter}>Automatic</li>
          <li className={css.itemFilter}>Manual</li>
          <li className={css.itemFilter}>
            <svg className={css.iconProperties}>
              <use href={`${icon}#icon-wind`} />
            </svg>
            <p>AC</p>
          </li>
          <li className={css.itemFilter}>TV</li>
          <li className={css.itemFilter}>Bathroom</li>
          <li className={css.itemFilter}>Kitchen</li>
        </ul>
      </div>
      <h2>Vehicle type</h2>
      <div>
        <ul>
          <li>Van</li>
          <li>Fully Integrated</li>
          <li>Alcove</li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
