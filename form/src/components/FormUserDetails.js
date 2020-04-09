import React, {Fragment} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


function FormUserDetails({
  nextStep,
  info,
  handleChange
}) {
  const continueGoing = e =>{
    e.preventDefault();
    nextStep();
  }
  return (
    <MuiThemeProvider>
      <Fragment>
        <AppBar title="Enter User Details" />
        <TextField 
          hintText = "Enter Your First Name"
          floatingLabelText = "First Name"
          name = "firstName"
          onChange = {handleChange}
          defaultValue={info.firstName}
        />
        <br />
        <TextField 
          hintText = "Enter Your Last Name"
          floatingLabelText = "Last Name"
          name = "lastName"
          onChange = {handleChange}
          defaultValue={info.lastName}
        />
        <br />
        <TextField 
          hintText = "Enter Your Email"
          floatingLabelText = "Email"
          name = 'email'
          onChange = {handleChange}
          defaultValue={info.email}
        />
        <br/>
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick = {continueGoing}
         />
      </Fragment>
    </MuiThemeProvider>
  )
}

const styles = {
  button: {
    margin: '50'
  }
}


export default FormUserDetails
