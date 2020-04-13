import React from 'react'
import { useField } from 'formik';
import { Radio, FormControlLabel} from '@material-ui/core';
import './FormikLearninig.scss'

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />
}

export default MyRadio;