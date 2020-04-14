import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import './FormUserDetails.scss';

import MyAppBar from './MyCustomComponents/MyAppBar';
import { Formik, Form } from 'formik';
import { Button, Paper } from '@material-ui/core';
import './FormikLearninig.scss';
import validationSchema from './validationSchema';
import MyTextField from './MyCustomComponents/MyTextField'

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: '5px',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   textField: {
//     margin: '5px',
//     width: '25ch',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   button: {
//     margin: '5px'
//   }
// });


function FormPersonalDetails({
  nextStep,
  prevStep,
  info,
  handleChange
}) {

  const prev = e => {
    e.preventDefault();
    prevStep();
  }

  // const classes = useStyles();

  const handleSubmit = (data, { setSubmitting }) => {
    setSubmitting(true);
    //make async calls
    console.log('submit', data);
    handleChange(data);
    nextStep();

    setSubmitting(false);
  }
  // console.log(handleChange);
  // console.log(info.email)


  return (
    //<MuiThemeProvider>
    <Fragment>
      <MyAppBar label="Personal Details" />
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
                  placeholder="Occupation"
                  label="Occupation"
                  handleChange={handleChange}
                  //onChange={handleChange}
                  info={info.occupation}
                  name="occupation"
                /> <br />
                <MyTextField
                  placeholder="City"
                  label="City"
                  handleChange={handleChange}
                  info={info.city}
                  name="city"
                  inputProps={{
                    pattern: "[a-zA-Zа-яА-Я -]*"
                  }}
                /> <br />
                <MyTextField
                  placeholder="Bio"
                  label="Bio"
                  handleChange={handleChange}
                  info={info.bio}
                  name="bio"
                />
                <div className="container">
                  <Button
                    className="Button"
                    variant="contained"
                    color="primary"
                    onClick={prev}
                  >
                    Prev
                </Button>
                  <Button
                    className="Button"
                    variant="contained"
                    color="primary"
                    disable={isSubmitting}
                    type="submit"
                  >
                    Next
              </Button>
                </div>


              </Paper>

              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>

    </Fragment>)
}

// const styles = {
//   button: {
//     margin: '50'
//   }
// }



export default FormPersonalDetails;
{/* <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Enter Prsonal Details
            </Typography>
        </Toolbar>
      </AppBar>
      <form className={classes.form}>
      //TODO: try to  transfer this component from
      //      add blocker to go next if not valid
        <TextField
          placeholder="Enter Your Occupation"
          label="Occupatio"
          className={classes.textField}
          name="occupation"
          onChange={handleChange}
          defaultValue={info.occupation}
        />
        <br />
        <TextField
          placeholder="Enter Your City"
          label="City"
          className={classes.textField}
          name="city"
          onChange={handleChange}
          defaultValue={info.city}
        />
        <br />
        <TextField
          placeholder="Enter Your Bio"
          label="Bio"
          className={classes.textField}
          name='bio'
          onChange={handleChange}
          defaultValue={info.bio}
        />
        <br />
        <div>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={prev}
          >
            Back
        </Button>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={next}
          >
            Next
      </Button>
        </div>

      </form>


    </Fragment> */}