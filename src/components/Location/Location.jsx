import { Formik, Field } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";
import icon from "../../images/icons.svg";
import css from "./Location.module.css";
import { Form } from "react-router-dom";

function Location() {
  const dispatch = useDispatch();
  const item = useSelector(selectorsCampers);
  console.log(item)
  // <Formik>
  //   <Form>
  //     <Field as="select" name={item.location}>
  //       <option value={item.location}></option>
  //     </Field>
  //   </Form>
  // </Formik>
}

// function Location({ item: { location } }) {
//   const id = useId();
//   return (
//     <div className={css.location}>
//       <label className={css.locationLabel} htmlFor={id}>
//         Location
//       </label>
//       <input
//         type="input"
//         className={css.inputLocation}
//         id={id}
//         value={<p>{location}</p>}
//         placeholder="Kyiv, Ukraine"
//       />
//       <svg className={css.svgIcon}>
//         <use href={`${icon}#icon-map`} />
//       </svg>
//     </div>
//   );
// }

export default Location;
