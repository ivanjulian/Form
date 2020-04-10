import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';


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
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className=/*"textTest"*/{classes.title}>
            Confirm Data
            </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.data}>
        <List>
          <ListItem>
            <ListItemText
              primary="First Name"
              secondary={info.firstName}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Last Name"
              secondary={info.lastName}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Email"
              secondary={info.email}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Occupation"
              secondary={info.occupation}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="City"
              secondary={info.city}
            />
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Bio"
              secondary={info.bio}
            />
          </ListItem>
        </List>
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
      </div>

    </Fragment>
  )
}



export default Confirm
