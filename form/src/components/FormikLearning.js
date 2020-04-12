import React from 'react'
import { Formik, Field, Form, useField, FieldArray } from 'formik';
import TetxField from '@material-ui/core/TextField';
import { Button, Checkbox, Radio, FormControlLabel, TextField, Select, MenuItem } from '@material-ui/core';
import * as yup from 'yup';

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  )
}

const validationSchema = yup.object({
  firstName: yup.string().required().max(10)
})


function FormikLearning() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          isTall: false,
          cookies: [],
          yougurt: '',
          pets: [{ type: "cat", name: "jarvis" }]
        }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors = {};

        //   if (values.firstName.includes('bob')) {
        //     errors.firstName = 'no bob'
        //   }

        //   return errors;
        // }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          //make async calls
          console.log('submit', data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div>
              <MyTextField
                placeholder="First Name"
                name="firstName"
              />
            </div>
            <div>
              <Field placeholder="Last Name" name="lastName" type="input" as={TetxField} />
            </div>
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <div>Cookies: </div>
            <Field name="cookies" type="checkbox" value="chocolate chip" as={Checkbox} />
            <Field name="cookies" type="checkbox" value="snickerdoodle" as={Checkbox} />
            <Field name="cookies" type="checkbox" value="sugar" as={Checkbox} />

            <div>Yogurt: </div>
            <MyRadio name="yogurt" type="radio" value="banana" label="banana" />
            <MyRadio name="yogurt" type="radio" value="apple" label="apple" />
            <MyRadio name="yogurt" type="radio" value="blueberry" label="blueberry" />
            <FieldArray name="pets">
              {({ arrayHelpers }) => {
                <div>
                  {values.pets.map((pet, index) => {
                    return (
                    <div key={pet.name} >
                      <MyTextField placeholder="Pet Name" name={`pets.${index}.name`} />
                      <Field name={`pets.${index}.type`} type='select' as={Select}>
                      <MenuItem value="cat">Cat</MenuItem>
                      <MenuItem value="dog">Dog</MenuItem>
                      <MenuItem value="frog">Frog</MenuItem>

                      </Field>
                    </div>);
                  })}
                </div>
              }}
            </FieldArray>
            <div>
              <Button
                disable={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikLearning;


