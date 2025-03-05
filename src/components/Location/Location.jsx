// import { Formik, Field } from "formik";
import { useId } from "react";
import LocationList  from "../LocationList/LocationList.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { selectorsCampers } from "../../redux/camper/selectorsCamper.js";
import icon from "../../images/icons.svg";
import css from "./Location.module.css";
// import { Form } from "react-router-dom";

// const initialValues = { location: "" };

// function Location() {
//   const locationId = useId();
//   const dispatch = useDispatch();
//   const item = useSelector(selectorsCampers);
//   console.log(item)

//   const handleChange = (values, action) => {
//     console.log(values);
//     action.resetForm();
//   }
//   return (
// {/* <Formik initialValues={initialValues} onChange={handleChange}>
//       <Form>
//         <label htmlFor={locationId} >Location</label>
//         <Field as="select" name="location" id={locationId}>
//           <option value="Ucraine, Kyiv">Ucraine, Kyiv</option>
//         </Field>
//       </Form>
//     </Formik>
//   );
// }; */}

function Location() {
  const id = useId();
  return (
    <>
      <form className={css.location} onChange={()=>{}}>
        <label className={css.locationLabel} htmlFor={id}>
          Location
        </label>
        <select className={css.inputLocation} id={id} name="location" autoFocus>
          <LocationList/>
        </select>
        <svg className={css.svgIcon}>
          <use href={`${icon}#icon-map`} />
        </svg>
      </form>
    </>
  );
}

export default Location;
