import { useId } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectorFilter } from "../../redux/filterCamper/selectorsFilterCamper.js";
// import { togleFilter } from "../../redux/filterCamper/sliceFilterCamper.js";

import { useState } from "react";

import ChekBtn from "../CheckBtn/CheckBtn.jsx";
import icon from "../../images/icons.svg";
import css from "./Filters.module.css";
import Button from "../Button/Button.jsx";

function Filters () {
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

  // const dispatch = useDispatch();
  // const filter = useSelector(selectorFilter);
  const [values, setValues] = useState({});
  const onFilter = (e) => {
    const param = e.target;
    setValues({ ...values, [param.name]: param.value }); ;

    if (e.target.checked === false) {
      if (param.name === "AC") {
        delete values.AC;
      } else if (param.name === "TV") {
        delete values.TV;
      } else if (param.name === "bathroom") {
        delete values.bathroom;
      } else if (param.name === "kitchen") {
        delete values.kitchen;
      }
    }
    return console.log("values:", values);
    // console.log("checked: ", e.target.checked);
    // return dispatch(togleFilter(equipment));
  };

  return (
    <>
      <form
        className={css.catalogSearch}
        onChange={onFilter}
        // onClick={() => onSearch(filter)}
      >
        <p className={css.itemFilters}>Filters</p>
        <h2 className={css.titleList}>Vehicle equipment</h2>
        <hr className={css.lineBetween} />
        <div className={css.listCheckBtnContainer}>
          <ChekBtn
            // checked={filter === "transmission"}
            id={automatId}
            type="radio"
            name="transmission"
            value="automatic"
            // onChange={onFilter}
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
            // checked={filter === "tramsmission"}
            id={manualId}
            type="radio"
            name="transmission"
            value="manual"
            // onChange={onFilter}
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
            // checked={filter === "engine"}
            id={hybridId}
            type="radio"
            name="engine"
            value="hybrid"
            // onChange={onFilter}
          >
            {
              <div className={css.buttonContent}>
                <svg className={css.iconProperties}>
                  <use href={`${icon}#icon-fuel-pump`} />
                </svg>
                <span className={css.btnName}>hybrid</span>
              </div>
            }
          </ChekBtn>
          <ChekBtn
            // checked={filter === "engine"}
            id={petrolId}
            type="radio"
            name="engine"
            value="petrol"
            // onChange={onFilter}
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
            // checked={filter === "engine"}
            id={diselId}
            type="radio"
            name="engine"
            value="diesel"
            // onChange={onFilter}
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
            // onChange={onFilter}
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
            // onChange={onFilter}
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
            // onChange={onFilter}
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
            // onChange={onFilter}
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
          <ChekBtn type="radio" id={vanId} name="form" value="van">
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
          <ChekBtn type="radio" id={alcoveId} name="form" value="alcove">
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
