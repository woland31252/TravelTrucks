import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";
import Button from "../Button/Button.jsx";
import clsx from "clsx";
import css from "../BookingForm/BookingForm.module.css";

function BookingForm() {
  const sendSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("This is a required place"),
    email: Yup.string()
      .email("Email must be a valid!")
      .required("This is a required place."),
    date: Yup.date().required("This is a required place."),
    comment: Yup.string().max(250, "Too long comment"),
  });

  const nameId = useId();
  const emailId = useId();
  const bookingId = useId();
  const commentId = useId();

  const initialValue = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (value, actions) => {
    ({
      name: value.name,
      email: value.email,
      date: value.date,
      comment: value.comment,
    });
    toast.success("Successfully created!");
    actions.resetForm();
  };

  return (
    <>
      <div className={css.bookingFormContainer}>
        <h2 className={css.bookingFormTitle}>Book your campervan now</h2>
        <p className={css.bookingFormItem}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validationSchema={sendSchema}
        >
          <Form className={css.bookingSendForm}>
            <div className={css.inputContainer}>
              <label className={css.lable} htmlFor={nameId}>
                Name*
              </label>
              <Field
                className={css.bookingInput}
                type="name"
                name="name"
                id={nameId}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </div>

            <div className={css.inputContainer}>
              <label className={css.lable} htmlFor={emailId}>
                Email*
              </label>
              <Field
                className={css.bookingInput}
                type="email"
                name="email"
                id={emailId}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="span"
              />
            </div>

            <div className={css.inputContainer}>
              <label className={css.lable} htmlFor={bookingId}>
                Booking date*
              </label>
              <Field
                className={css.bookingInput}
                type="date"
                name="date"
                id={bookingId}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="date"
                component="span"
              />
            </div>

            <div className={css.inputContainer}>
              <label className={css.lable} htmlFor={commentId}>
                Comment
              </label>
              <Field
                className={clsx(css.bookingInput, css.comment)}
                type="text"
                as="textarea"
                name="comment"
                id={commentId}
              />
              <ErrorMessage
                className={css.errorMessage}
                name="comment"
                component="span"
              />
            </div>

            <Button type="submit" variant="send">
              Send
            </Button>
            <Toaster position="top-center" />
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default BookingForm;
