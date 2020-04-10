import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './FormUserDetails.scss';
// TODO: 
// 2.Add global styles
// 3.Move some parts into separate components.
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

  return (
    //<MuiThemeProvider>
      <Fragment>
      
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className=/*"textTest"*/{classes.title}>
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <form className={classes.form}>
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
        
      </Fragment>  )
}

const styles = {
  button: {
    margin: '50'
  }
}


export default FormUserDetails
