import React, { Fragment } from 'react';
import { Button, Paper, List, ListItem, ListItemText } from '@material-ui/core';

import MyAppBar from './MyCustomComponents/MyAppBar';

import './FormikLearninig.scss';

function Confirm({
  nextStep,
  prevStep,
  info
}) {
  const next = e => {
    e.preventDefault();
  }
  const prev = e => {
    e.preventDefault();
    prevStep();
  }

  const send = () =>{
    //Add sending to the Gmail
    nextStep();
  }


  return (
    <Fragment>
      <MyAppBar label="Confirm" />
      <div className="FormikLearning Content">
        <Paper className="Paper" >
          <List className="container">
            <ListItem>
              <ListItemText
                secondary="First Name"
                primary={info.firstName}
                className="ListItem"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                secondary="Last Name"
                primary={info.lastName}
                className="ListItem"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                secondary="Email"
                primary={info.email}
                className="ListItem"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                secondary="Occupation"
                primary={info.occupation}
                className="ListItem"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                secondary="City"
                primary={info.city}
                className="ListItem"
              />
            </ListItem>

            <ListItem>
              <ListItemText
                secondary="Bio"
                primary={info.bio}
                className="ListItem"
              />
            </ListItem>
          </List>
          <div className="container">
            <Button
              variant="contained"
              className="Button"
              color="primary"
              onClick={prev}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={send}
            >
              Send
            </Button>
          </div>
        </Paper>

      </div>

    </Fragment>
  )
}



export default Confirm;
