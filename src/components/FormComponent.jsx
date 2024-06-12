import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { Button, TextField, Grid, Typography } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short - should be 2 chars minimum"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  age: Yup.number()
    .required("Age is required")
    .min(1, "Age must be at least 1")
    .max(120, "Age must be less than or equal to 120"),
});

const FormComponent = ({ addFormValues }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", age: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addFormValues(values);
        resetForm();
      }}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography  variant="h6">Add New Entry</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field name="name">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Field name="age">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Age"
                    variant="outlined"
                    error={touched.age && !!errors.age}
                    helperText={touched.age && errors.age}
                    fullWidth
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12}>
              <Button  type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

FormComponent.propTypes = {
  addFormValues: PropTypes.func.isRequired,
};

export default FormComponent;
