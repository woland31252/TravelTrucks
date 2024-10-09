import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selecttorFilter } from "../../redux/filterCamper/selectorsFilterCamper.js";
import {
  togleFilter,
  resetFilter,
} from "../../redux/filterCamper/sliceFilterCamper.js";

import ChekBtn from "../CheckBtn/CheckBtn.jsx";
import icon from "../../images/icons.svg";
import css from "./Filters.module.css";
import Button from "../Button/Button.jsx";

function Filters() {
  const automatId = useId();
  const manualId = useId();
  const hybridId = useId();
  const petrolId = useId();
  const diselId = useId();
  const acId = useId();
  const tvId = useId();
  const bathroomId = useId();
  const kitchenId = useId();
  const vanId = useId();
  const fullyId = useId();
  const alcoveId = useId();

  const dispatch = useDispatch();
  const filter = useSelector(selecttorFilter);
  const onFilter = (filter) => dispatch(togleFilter(filter));
  // const resetFilters = dispatch(resetFilter())

  return (
    <>
      <form
        className={css.catalogSearch}
        onSubmit={() => console.log(ChekBtn.value)}
      >
        <p className={css.itemFilters}>Filters</p>
        <h2 className={css.titleList}>Vehicle equipment</h2>
        <hr className={css.lineBetween} />
        <div className={css.listCheckBtnContainer}>
          <ChekBtn
            // checked={filter === "automatic"}
            id={automatId}
            type="checkbox"
            name="transmission"
            value="automatic"
            onCheck={() => onFilter("automatic")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-diagram`} />
                </svg>
                <span className={css.btnName}>automatic</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "manual"}
            id={manualId}
            type="checkbox"
            name="transmission"
            value="manual"
            onCheck={() => onFilter("manual")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-diagram`} />
                </svg>
                <span className={css.btnName}>manual</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "hybrid"}
            id={hybridId}
            type="checkbox"
            name="engine"
            value="hybrid"
            onCheck={() => onFilter("hybrid")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-diagram`} />
                </svg>
                <span className={css.btnName}>hybrid</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "petrol"}
            id={petrolId}
            type="checkbox"
            name="engine"
            value="petrol"
            onCheck={() => onFilter("petrol")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-fuel-pump`} />
                </svg>
                <span className={css.btnName}>petrol</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            checked={filter === "disel"}
            id={diselId}
            type="checkbox"
            name="engine"
            value="disel"
            onCheck={() => onFilter("disel")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-fuel-pump`} />
                </svg>
                <span className={css.btnName}>diesel</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "AC"}
            id={acId}
            type="checkbox"
            name="AC"
            value="true"
            onCheck={() => onFilter("AC")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-wind`} />
                </svg>
                <span className={css.btnName}>AC</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "TV"}
            id={tvId}
            type="checkbox"
            name="TV"
            value="true"
            onCheck={() => onFilter("TV")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-tv20`} />
                </svg>
                <span className={css.btnName}>TV</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "bathroom"}
            id={bathroomId}
            type="checkbox"
            name="bathroom"
            value="true"
            onCheck={() => onFilter("bathroom")}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-bi-droplet20`} />
                </svg>
                <span className={css.btnName}>bathroom</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "kitchen"}
            id={kitchenId}
            type="checkbox"
            name="kitchen"
            value="true"
            onCheck={() => onFilter("kitchen")}
          >
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
        <hr className={css.lineBetween} />
        <div className={css.typeListContainer}>
          <ChekBtn name="type" id={vanId} type="radio">
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-grid-1x2`} />
                </svg>
                <span className={css.btnName}>van</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            type="radio"
            id={fullyId}
            name="form"
            value="fullyIntegrated"
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-grid-2x2`} />
                </svg>
                <span className={css.btnName}>fully integrated</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            type="radio"
            id={alcoveId}
            name="form"
            value="alcove"
          >
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
        <Button type="button" variant="search">
          Search
        </Button>
      </form>
    </>
  );
}

export default Filters;
