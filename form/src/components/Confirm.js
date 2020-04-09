import React, { Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem'


function Confirm({
  nextStep,
  prevStep,
  info
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
        <AppBar title="Confirm Users Data" />
        <List>
          <ListItem
            primaryText="First Name"
            secondaryText={info.firstName}
          />

          <ListItem
            primaryText="Last Name"
            secondaryText={info.firstName}
          />
          <ListItem
            primaryText="Email"
            secondaryText={info.firstName}
          />
          <ListItem
            primaryText="Ocupation"
            secondaryText={info.firstName}
          />
          <ListItem
            primaryText="City"
            secondaryText={info.firstName}
          />
          <ListItem
            primaryText="Bio"
            secondaryText={info.firstName}
          />
        </List>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={next}
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


export default Confirm
