import { useState, useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button.jsx";
import icon from "../../images/icons.svg";
import clsx from "clsx";
import css from "../BookingForm/BookingForm.module.css";

function BookingForm() {
    const nameId = useId();
    const emailId = useId();
    const bookingId = useId();
    const commentId = useId()

  return (
    <>
    <div className={css.bookingFormContainer}>
      <h2 className={css.bookingFormTitle}>Book your campervan now</h2>
      <p className={css.bookingFormItem}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
    // initialValues={initialValue}
    // onSubmit={handleSubmit}
    // validationSchema={loginSchema}
  >
    <Form className={css.bookingSendForm}>
        <div className={css.inputContainer}>
        <label className={css.lable} htmlFor={nameId}>Name</label>
        <Field className={css.bookingInput} type="name" name="name" id={nameId}/>
        </div>
      <ErrorMessage className={clsx(css.logInMessage, css.logInErrorEmail)} name="name" component="span" />
      <div className={css.inputContainer}>
      <label className={css.lable} htmlFor={emailId}>Email</label>
      <Field className={css.bookingInput} type="email" name="email" id={ emailId}/>
      </div>
      <ErrorMessage className={clsx(css.logInMessage, css.logInErrorPassw)} name="email" component="span" />
      <div className={css.inputContainer}>
      <label className={css.lable} htmlFor={bookingId}>Booking date</label>
      <Field className={css.bookingInput} type="date" name="booking" id={ bookingId}/>
      </div>
      <ErrorMessage className={clsx(css.logInMessage, css.logInErrorPassw)} name="booking" component="span" />
      <div className={css.inputContainer}>
      <label className={css.lable} htmlFor={commentId}>Comment</label>
      <Field className={clsx(css.bookingInput, css.comment)} type="text" name="comment" id={ commentId}/>
      </div>
      <ErrorMessage className={clsx(css.logInMessage, css.logInErrorPassw)} name="comment" component="span" />
      <Button type="submit" variant="send">Send</Button>
      </Form>
  </Formik>
    </div>
   
    </>
    
  );
}

export default BookingForm;
