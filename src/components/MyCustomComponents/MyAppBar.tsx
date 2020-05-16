import React, { Fragment, ReactNode } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/icons/Menu';
//import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import TextField from '@material-ui/core/TextField';

import { Formik, Field, Form, useField, FieldArray } from 'formik';
import { Button, Checkbox, Radio, FormControlLabel, TextField, Paper, Select, MenuItem, Typography } from '@material-ui/core';
import * as yup from 'yup';

import DetailsWindow from '../DetailsWindow';
import { Slide } from '@material-ui/core';


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

const MyAppBar: React.FC<any> = ({ label }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <FormControlLabel
          control={
            <IconButton edge="start"  color="inherit" aria-label="menu" onClick={handleClickOpen}>
          <Menu/>
            </IconButton>
          }
          label={null}
        />

        <Typography variant="h6" className={classes.title}>
          {label}
        </Typography>
          <DetailsWindow  open={open} onClose={handleClickClose} />
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar;
