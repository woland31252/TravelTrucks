import { useId } from "react";
import { useDispatch } from "react-redux";
import { togleFilter } from "../../redux/filterCamper/sliceFilterCamper.js";

import { useState } from "react";

import ChekBtn from "../CheckBtn/CheckBtn.jsx";
import icon from "../../images/icons.svg";
import css from "./Filters.module.css";
import Button from "../Button/Button.jsx";

function Filters() {
  const automatId = useId();
  const manualId = useId();
  const hybridId = useId();
  const petrolId = useId();
  const dieselId = useId();
  const acId = useId();
  const tvId = useId();
  const bathroomId = useId();
  const kitchenId = useId();
  const vanId = useId();
  const fullyId = useId();
  const alcoveId = useId();

  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [hasChangRadio, setHasChangRadio] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  const onFilter = (e) => {
    const param = e.target;
    setValues({ ...values, [param.name]: param.value });
    if (param.type === "checkbox") {
      setHasChanged(param.checked);
    };
    if (param.type === "radio") { setHasChangRadio(param.checked) };

    deleteValues(values, hasChanged, param);
  };

  console.log(values)
  console.log("hasChanged: ", hasChanged);
  console.log("hasChangRadio: ", hasChangRadio);

  function deleteValues(val, state, param) {
    if (state) {
      if (param.name === "AC") {
        setValues({ ...val, AC: delete val.AC })
      };
      if (param.name === "TV") {
        setValues({ ...val, TV: delete val.TV })
      };
      if (param.name === "bathroom") {
        setValues({ ...val, bathroom: delete val.bathroom })
      };
      if (param.name === "kitchen") {
        setValues({ ...val, kitchen: delete val.kitchen })
      };
    }
  };
  
  const onSearch = (e) => {
    e.preventDefault();
    dispatch(togleFilter(values));
    setValues({});
    setHasChanged(false);
    setHasChangRadio(false);
    e.target.reset();
  };

  return (
    <>
      <form
        className={css.catalogSearch}
        onChange={onFilter}
        onSubmit={onSearch}
      >
        <p className={css.itemFilters}>Filters</p>
        <h2 className={css.titleList}>Vehicle equipment</h2>
        <hr className={css.lineBetween} />
        <div className={css.listCheckBtnContainer}>
          <ChekBtn
            checked={hasChangRadio}
            id={automatId}
            type="radio"
            name="transmission"
            value="automatic"
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
            checked={hasChangRadio}
            id={manualId}
            type="radio"
            name="transmission"
            value="manual"
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
            checked={hasChangRadio}
            id={hybridId}
            type="radio"
            name="engine"
            value="hybrid"
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
            checked={hasChangRadio}
            id={petrolId}
            type="radio"
            name="engine"
            value="petrol"
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
            checked={hasChangRadio}
            id={dieselId}
            type="radio"
            name="engine"
            value="diesel"
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
            checked={hasChanged}
            id={acId}
            type="checkbox"
            name="AC"
            value="true"
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
            checked={hasChanged}
            id={tvId}
            type="checkbox"
            name="TV"
            value="true"
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
            checked={hasChanged}
            id={bathroomId}
            type="checkbox"
            name="bathroom"
            value="true"
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
            checked={hasChanged}
            id={kitchenId}
            type="checkbox"
            name="kitchen"
            value="true"
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
          <ChekBtn
            checked={hasChangRadio}
            type="radio"
            id={vanId}
            name="form"
            value="panelTruck"
          >
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
            checked={hasChangRadio}
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
            checked={hasChangRadio}
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
        {(!hasChanged && !hasChangRadio) ? (
          <Button variant="disabled-search" disabled>
            Search
          </Button>
        ) : (
          <Button type="submit" variant="search">
            Search
          </Button>
        )}
      </form>
    </>
  );
}

export default Filters;
