import React, { ClassAttributes, TextareaHTMLAttributes } from 'react'
import { Formik, Field, Form, useField, FieldArray, FieldConfig, FieldHookConfig } from 'formik';
import { Button, Checkbox, Radio, FormControlLabel, TextField, Paper, Select, MenuItem, Typography } from '@material-ui/core';
import * as yup from 'yup';
import './FormikLearninig.scss'
type MyRadioPropsTypes = { label: string } & FieldHookConfig<{}>

const MyRadio: React.FC<MyRadioPropsTypes> = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

type MyTextPropsTypes = {
  inputProps?: {},
  placeholder: string,
} & FieldHookConfig<{}>

const MyTextField: React.FC<MyTextPropsTypes> = ({ inputProps, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div className="container">
      <TextField
        inputProps={inputProps}
        className="MyTextField"
        placeholder={placeholder}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
    </div>

  )
}

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  lastName: yup
    .string()
    .required()
    .max(10),
  email: yup
    .string()
    .required()
    .email(),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required()
    })
  )

})


function FormikLearning() {

  const initialValues = {
    firstName: '' as string,
    lastName: '' as string,
    email: '' as string,
    isTall: false as boolean,
    cookies: [] as Array<string>,
    yougurt: '' as string,
    pets: [{ type: "cat", name: "jarvis", id: '' + Math.random() }] as Array<{ type: string, name: string, id: string }>
  }

  const handleSubmit = (data: any, { setSubmitting }: any) => {
    setSubmitting(true);
    //make async calls
    console.log('submit', data);
    setSubmitting(false);
  }

  return (
    <div >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, isSubmitting }) => (
          <Form className="FormikLearning">
            <Paper className="Paper">
              <MyTextField
                placeholder="First Name"
                name="firstName"
                inputProps={{
                  pattern: "[a-zA-Zа-яА-Я]*"
                }}
              /> <br />
              <MyTextField
                placeholder="Last Name"
                name="lastName"
                inputProps={{
                  pattern: "[a-zA-Zа-яА-Я]*"
                }}
              /> <br />
              <MyTextField
                placeholder="Email"
                name="email"
              />
            </Paper>


            <Field name="isTall" type="checkbox" as={Checkbox} />

            <Typography variant="subtitle1">Cookies: </Typography>
            <div>
              <Field name="cookies" type="checkbox" value="chocolate chip" as={Checkbox} />
              <Field name="cookies" type="checkbox" value="snickerdoodle" as={Checkbox} />
              <Field name="cookies" type="checkbox" value="sugar" as={Checkbox} />
            </div>

            <Typography variant="subtitle1">Yogurt: </Typography>
            <div>
              <MyRadio name="yogurt" type="radio" value="banana" label="banana" />
              <MyRadio name="yogurt" type="radio" value="apple" label="apple" />
              <MyRadio name="yogurt" type="radio" value="blueberry" label="blueberry" />
            </div>

            <FieldArray name="pets">
              {arrayHelpers =>
                <div>
                  <Button
                    onClick={() => {
                      arrayHelpers.push({
                        type: 'frog',
                        name: '',
                        id: '' + Math.random()
                      })
                    }}>add pet</Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id} >
                        <MyTextField placeholder="Pet Name" name={`pets.${index}.name`} />
                        <Field name={`pets.${index}.type`} type='select' as={Select}>
                          <MenuItem value="cat">Cat</MenuItem>
                          <MenuItem value="dog">Dog</MenuItem>
                          <MenuItem value="frog">Frog</MenuItem>

                        </Field>
                        <Button
                          onClick={() => arrayHelpers.remove(index)}
                        >X</Button>
                      </div>);
                  })}
                </div>
              }
            </FieldArray>

            <div>
              <Button
                disabled={isSubmitting}
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


