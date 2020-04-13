import React from 'react'
import { Paper, Button } from '@material-ui/core';
import MyTextField from './MyCustomComponents/MyTextField';
import { Formik, Field, Form, useField, FieldArray } from 'formik';
import validationSchema from './validationSchema'
import './FormikLearninig.scss'


function FormikUserDetails({
  nextStep,
  info,
  handleChange
}) {

  const next = e => {
    e.preventDefault();
    nextStep();
  }
  return (
    <Formik
      info={info}
      validationSchema={validationSchema}
      // onSubmit={handleSubmit}
    >
      {({ values, errors, isSubmitting }) => (
        <Form className="FormikLearning">
          <Paper className="Paper">
            <MyTextField
              placeholder="First Name"
              name="firstName"
             // label={info.firstName}
              //defaultValue={info.firstName}
              handleChange={handleChange}
              inputProps={{
                pattern: "[a-zA-Zа-яА-Я]*"
              }}
            /> <br />
            <MyTextField
              placeholder="Last Name"
              name="lastName"
              //defaultValue={info.lastName}
              handleChange={handleChange}
              inputProps={{
                pattern: "[a-zA-Zа-яА-Я]*"
              }}
            /> <br />
            <MyTextField
              placeholder="Email"
              //defaultValue={info.email}
              handleChange={handleChange}
              name="email"
            /> <br />
            <Button
              variant="contained"
              color="primary"
              onClick={next}
            >
              Next
            </Button>
      
      </Paper>
      </Form>
    )}
    </Formik>

  )
}

export default FormikUserDetails
