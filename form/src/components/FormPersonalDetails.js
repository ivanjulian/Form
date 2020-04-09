import React, { Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';


function FormPersonalDetail({
  nextStep,
  prevStep,
  info,
  handleChange
}) {
  const next = e => {
    e.preventDefault();
    nextStep();
  }
  const prev = e => {
    e.preventDefault();
    prevStep();
  }
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter Your Occupatio"
          floatingLabelText="Occupatio"
          name="occupatio"
          onChange={handleChange}
          defaultValue={info.occupatio}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          name="city"
          onChange={handleChange}
          defaultValue={info.city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          name='bio'
          onChange={handleChange}
          defaultValue={info.bio}
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={prev}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={next}
        >
          Next
      </Button>

      </Fragment>
    </MuiThemeProvider>
  )
}

const styles = {
  button: {
    margin: '50'
  }
}


export default FormPersonalDetail
