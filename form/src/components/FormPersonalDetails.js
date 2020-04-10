import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className=/*"textTest"*/{classes.title}>
            Enter Prsonal Details
            </Typography>
        </Toolbar>
      </AppBar>
      <form className={classes.form}>
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


    </Fragment>
  )
}

const styles = {
  button: {
    margin: '50'
  }
}



export default FormPersonalDetail
