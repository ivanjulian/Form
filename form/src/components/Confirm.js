import React, { Fragment } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import MyAppBar from './MyCustomComponents/MyAppBar';
import { Formik, Form } from 'formik';
import { Button, Paper, List, ListItem, ListItemText } from '@material-ui/core';
import './FormikLearninig.scss';

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
  data: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    margin: '5px'
  }
});

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

  const classes = useStyles();


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
              onClick={next}
            >
              Send
            </Button>
          </div>
        </Paper>

      </div>

    </Fragment>
  )
}



export default Confirm
