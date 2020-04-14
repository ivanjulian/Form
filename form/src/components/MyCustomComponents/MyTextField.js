import React from 'react'
import {useField } from 'formik';
import {TextField } from '@material-ui/core';
import '../FormikLearninig.scss'
//TODO: try to  transfer this code to FormUserDetails
const MyTextField = ({ ...props}/* { info, handleChange, label, inputProps, placeholder, ...props } */) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div className="container">
      <TextField
        //placeholder="placeholder"
        //label={label}
        //className="MyTextField"
        //inputProps={props.inputProps}
        //onChange={handleChange}
       // name='firstName'
       // defaultValue={props.info}
        {...field}
        {...props}

        helperText={errorText}
        error={!!errorText}
        //placeholder={props.placeholder}
        //label={props.label}
        // className={classes.textField}
        //name={props.name}
        //onChange={props.handleChange}
        //defaultValue={props.defaultValue}
      />
      <br />
    </div>

  )
}

export default MyTextField;