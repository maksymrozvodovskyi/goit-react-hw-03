import css from "./ContactForm.module.css";

import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = {
  username: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.formWrap}>
        <div className={css.formFieldWrap}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="username"
            id={nameFieldId}
            className={css.fieldwrap}
          />
          <ErrorMessage name="username" component="span" />

          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.fieldwrap}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
