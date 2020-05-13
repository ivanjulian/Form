import React, { Fragment } from 'react'
import { Formik, Form } from 'formik';
import { Button, Paper } from '@material-ui/core';

import validationSchema from './validationSchema';

import MyAppBar from './MyCustomComponents/MyAppBar';
import MyTextField from './MyCustomComponents/MyTextField'

import './FormikLearninig.scss';

type FormPersonalDetailsPropsType = {
  nextStep: ()=>void,
  prevStep: ()=>void,
  info: any,
  handleChange: (data: any)=> void
}

type FormPersonalDetailsStateType = {
  
}


type FormPersonalDetailsType = FormPersonalDetailsPropsType & FormPersonalDetailsStateType;


const FormPersonalDetails:React.FC<FormPersonalDetailsType> = ({
  nextStep,
  prevStep,
  info,
  handleChange
}) => {

  const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    prevStep();
  }


  const handleSubmit = (data: any, { setSubmitting}: any) => {
    setSubmitting(true);
    //make async calls
    //console.log('submit', data);
    handleChange(data);
    nextStep();

    setSubmitting(false);
  }

  return (
    <Fragment>
      <MyAppBar label="Personal Details" />
      <div className="Content">
        <Formik
          initialValues={info}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, isSubmitting }) => (
            <Form className="FormikLearning">
              <Paper className="Paper">
                <MyTextField
                  placeholder="Occupation"
                  label="Occupation"
                  handleChange={handleChange}
                  info={info.occupation}
                  name="occupation"
                /> <br />
                <MyTextField
                  placeholder="City"
                  label="City"
                  handleChange={handleChange}
                  info={info.city}
                  name="city"
                  inputProps={{
                    pattern: "[a-zA-Zа-яА-Я -]*"
                  }}
                /> <br />
                <MyTextField
                  placeholder="Bio"
                  label="Bio"
                  handleChange={handleChange}
                  info={info.bio}
                  name="bio"
                />
                <div className="container">
                  <Button
                    className="Button"
                    variant="contained"
                    color="primary"
                    onClick={prev}
                  >
                    Prev
                </Button>
                  <Button
                    className="Button"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Next
              </Button>
                </div>


              </Paper>

              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
      </div>

    </Fragment>)
}


export default FormPersonalDetails;
