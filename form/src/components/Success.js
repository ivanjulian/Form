import React, { Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
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
  },
  reply: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  titleReply: {
    marginTop: '30px',
    flexGrow: 1,
    textAlign: 'center'
  },
});

function Success() {

  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className=/*"textTest"*/{classes.title}>
            Success!
            </Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h6" className=/*"textTest"*/{classes.titleReply}>
        Your data was sent. We will answer to your email.
      </Typography>

    </Fragment>
  )
}

export default Success
