import ChekBtn from "../CheckBtn/CheckBtn.jsx";
import icon from "../../images/icons.svg";
import css from "../Filters/Filters.module.css";

function Filters() {
  return (
    <div>
      <p className={css.itemFilters}>Filters</p>
      <h2 className={css.titleList}>Vehicle equipment</h2>
      <div className={css.lineBetween}></div>
      <div className={css.listCheckBtnContainer}>
        <ChekBtn id="AC">
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-diagram`} />
              </svg>
              <span className={css.btnName}>automatic</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-diagram`} />
              </svg>
              <span className={css.btnName}>manual</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-diagram`} />
              </svg>
              <span className={css.btnName}>hybrid</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn id="AC">
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-fuel-pump`} />
              </svg>
              <span className={css.btnName}>petrol</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-fuel-pump`} />
              </svg>
              <span className={css.btnName}>diesel</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-wind`} />
              </svg>
              <span className={css.btnName}>AC</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn id="AC">
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-tv20`} />
              </svg>
              <span className={css.btnName}>TV</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-bi-droplet20`} />
              </svg>
              <span className={css.btnName}>bathroom</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-cup-hot`} />
              </svg>
              <span className={css.btnName}>kitchen</span>
            </div>
          }
        </ChekBtn>
      </div>
      <h2 className={css.titleTypeList}>Vehicle type</h2>
      <div className={css.lineBetween}></div>
      <div className={css.typeListContainer}>
      <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-grid-1x2`} />
              </svg>
              <span className={css.btnName}>van</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-grid-2x2`} />
              </svg>
              <span className={css.btnName}>fully integrated</span>
            </div>
          }
        </ChekBtn>
        <ChekBtn>
          {
            <div className={css.buttonContent}>
              <svg className={css.iconProperties}>
                <use href={`${icon}#icon-grid-3x3`} />
              </svg>
              <span className={css.btnName}>alcove</span>
            </div>
          }
        </ChekBtn>
      </div>
    </div>
  );
}

export default Filters;
