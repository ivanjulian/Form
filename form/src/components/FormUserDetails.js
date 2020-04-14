import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import './FormUserDetails.scss';

import MyAppBar from './MyCustomComponents/MyAppBar';
import { Formik, Form } from 'formik';
import { Button, Paper } from '@material-ui/core';
import './FormikLearninig.scss';
import validationSchema from './validationSchema';
import MyTextField from './MyCustomComponents/MyTextField'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '5px',
  },
  title: {
    flexGrow: 1,
  },
  textField: {
    margin: '5px',
    width: '25ch',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    margin: '5px'
  }
});

function FormUserDetails({
  nextStep,
  info,
  handleChange
}) {
  const next = e => {
    e.preventDefault();
    nextStep();
  }
  const classes = useStyles();

  const handleSubmit = (data,{ setSubmitting }) => {
    //setSubmitting(true);
    //make async calls
    console.log('submit', data);
    handleChange(data);
    nextStep();

    //setSubmitting(false);
  }
  // console.log(handleChange);
  // console.log(info.email)


  return (
    //<MuiThemeProvider>
    <Fragment>
      <MyAppBar />
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
                //onChange={handleChange} 
                //onChange={handleChange}
                defaultValue={info.firstName}
                //info={info.firstName}
                name="firstName"
                inputProps={{
                  pattern: "[a-zA-Zа-яА-Я]*"
                }}
              /> <br />
              <MyTextField
                placeholder="Last Name"
                label="Last Name"
                //handleChange={handleChange} 
                //onChange={handleChange}
                //info={info.lastName}
                name="lastName"
                inputProps={{
                  pattern: "[a-zA-Zа-яА-Я]*"
                }}
              /> <br />
              <MyTextField
                placeholder="Email"
                label="Email"
                //handleChange={handleChange} 
                //onChange={handleChange} 
                //info={info.email}
                name="email"
              />


              {/* <Button
                disable={isSubmitting}
                type="submit"
              >
                Submit
              </Button> */}
              <br />
              <Button
                variant="contained"
                color="primary"
                disable={isSubmitting}
                type="submit"
              >
                Next
              </Button>

            </Paper>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Fragment>)
}

const styles = {
  button: {
    margin: '50'
  }
}


export default FormUserDetails;