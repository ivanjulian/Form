import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
//import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';
import './FormUserDetails.scss';

import MyAppBar from './MyCustomComponents/MyAppBar';
import { Formik, Field, Form, useField, FieldArray } from 'formik';
import { Button, Checkbox, Radio, FormControlLabel, TextField, Paper, Select, MenuItem, Typography } from '@material-ui/core';
import * as yup from 'yup';
import './FormikLearninig.scss';

import MyTextField from './MyCustomComponents/MyTextField'
// TODO: 
// 2.Add global styles
// 3.Move some parts into separate components.

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

  /*const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    isTall: false,
    cookies: [],
    yougurt: '',
    pets: [{ type: "cat", name: "jarvis", id: '' + Math.random() }]
  }*/

  const handleSubmit = (data, { setSubmitting }) => {
    setSubmitting(true);
    //make async calls
    console.log('submit', data);
    setSubmitting(false);
  }
  console.log(handleChange);
  console.log(info.email)

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
                handleChange={handleChange}
                info={info.firstName}
                name="firstName"
                inputProps={{
                  pattern: "[a-zA-Zа-яА-Я]*"
                }}
              /> <br />
              <MyTextField
                placeholder="Last Name"
                label="Last Name"
                handleChange={handleChange}
                info={info.lastName}
                name="lastName"
                inputProps={{
                  pattern: "[a-zA-Zа-яА-Я]*"
                }}
              /> <br />
              <MyTextField
                placeholder="Email"
                label="Email"
                handleChange={handleChange}
                info={info.email}
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
                onClick={next}
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

      {/* <form className={classes.form}>
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          className={classes.textField}
          name="firstName"
          onChange={handleChange}
          defaultValue={info.firstName}
        />
        <br />
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          className={classes.textField}
          name="lastName"
          onChange={handleChange}
          defaultValue={info.lastName}
        />
        <br />
        <TextField
          placeholder="Enter Your Email"
          label="Email"
          className={classes.textField}
          name='email'
          onChange={handleChange}
          defaultValue={info.email}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={next}
        >
          Next
      </Button>
        </form>
         */}
