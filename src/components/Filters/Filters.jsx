import { useId } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorFilter } from "../../redux/filterCamper/selectorsFilterCamper.js";
import {
  togleFilter
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
  const filter = useSelector(selectorFilter);
  
  
  
         
  const onFilter = (e) => {
    const equipment = [...filter, { [e.target.name]: e.target.value }];
    console.log(equipment)
      return filter.push(equipment);
    
  };
  // const resetFilters = dispatch(resetFilter())
  // const [params, setParams] = useState({});
  // const handleChangeParams = (e) => {
  //   setParams(e.target.value);
  //   console.log(e.target.checked);
  // }
  console.log(filter);

  const handleClick = (e) => {
    console.log(e.target.value);
    // console.log(e.target.checked)
    // console.log({ [e.target.name]: e.target.value })
    console.log(filter);
    console.log(togleFilter(filter))
    return dispatch(togleFilter(filter));
  };
  return (
    <>
      <form
        className={css.catalogSearch}
        onClick={handleClick}
        // onClick={(e) => {
        //   console.log(e.target.value);
        //   console.log(e.target.checked)
        //   console.log({ [e.target.name]: e.target.value })
        //   console.log(filter)
        //  }}
        // onSubmit={(e) => console.log(dispatch(e.target.value))}
      >
        <p className={css.itemFilters}>Filters</p>
        <h2 className={css.titleList}>Vehicle equipment</h2>
        <hr className={css.lineBetween} />
        <div className={css.listCheckBtnContainer}>
          <ChekBtn
            // checked={filter}
            id={automatId}
            type="checkbox"
            name="transmission"
            value="automatic"
            onClick={()=>onFilter}
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
            onChange={() => onFilter}
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
            onChange={() => onFilter}
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
            checked={filter === "petrol"}
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
            value="AC"
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
            value="TV"
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
            value="bathroom"
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
            value="kitchen"
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
        <Button type="button" variant="search" onClick={handleClick}>
          Search
        </Button>
      </form>
    </>
  );
}

export default Filters;
