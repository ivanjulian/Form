import React from 'react'
import {useField } from 'formik';
import {TextField } from '@material-ui/core';
import '../FormikLearninig.scss'
//TODO: try to  transfer this code to FormUserDetails
const MyTextField = ({ info, handleChange, label, inputProps, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div className="container">
      <TextField
        placeholder="placeholder"
        label={label}
        //className="MyTextField"
        inputProps={inputProps}
        onChange={handleChange}
        name='firstName'
        defaultValue={info}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
      <br />
    </div>

  )
}

export default MyTextField;