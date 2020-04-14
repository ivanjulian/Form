import React, { Fragment } from 'react'
import { Formik, Form } from 'formik';
import { Button, Paper } from '@material-ui/core';

import validationSchema from './validationSchema';

import MyAppBar from './MyCustomComponents/MyAppBar';
import MyTextField from './MyCustomComponents/MyTextField'

import './FormikLearninig.scss';



function FormUserDetails({
  nextStep,
  info,
  handleChange
}) {

  const handleSubmit = (data, { setSubmitting }) => {
    setSubmitting(true);
    //make async calls
    //console.log('submit', data);
    handleChange(data);
    nextStep();
    setSubmitting(false);
  }



  return (
    <Fragment>
      <MyAppBar label="User Details" />

      <div className="Content">
        <Formik
          initialValues={info}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, isSubmitting }) => (
            <Form className="FormikLearning">
              <Paper className="Paper">
                <MyTextField
                  placeholder="First Name"
                  label="First Name"
                  defaultValue={info.firstName}
                  name="firstName"
                  inputProps={{
                    pattern: "[a-zA-Zа-яА-Я -]*"
                  }}
                /> <br />
                <MyTextField
                  placeholder="Last Name"
                  label="Last Name"
                  name="lastName"
                  inputProps={{
                    pattern: "[a-zA-Zа-яА-Я -]*"
                  }}
                /> <br />
                <MyTextField
                  placeholder="Email"
                  label="Email"
                  name="email"
                />
                <div className="container">
                  <Button
                    variant="contained"
                    color="primary"
                    disable={isSubmitting}
                    type="submit"
                  >
                    Next
                </Button>
                </div>

              </Paper>

              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </div>

    </Fragment>
  )
}



export default FormUserDetails;