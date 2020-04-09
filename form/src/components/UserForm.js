import React, { useState } from 'react';
import FormUserDetails from './FormPersonalDetails';

function UserForm() {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })
  nextStep = () => {
    //const {step} = step;
    setStep(step + 1);
  }

  prevStep = () => {
    //const {step} = step;
    setStep(step - 1);
  }

  handleChange = input => e =>{
    setInfo(info.input = e.target.value)
  }

  switch(step){
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          info={info}
         />
      )
    case 2: 
      return <h1>Form Personal Details</h1>
    case 3:
      return <h1>Confirm</h1>
    case 4:
      return <h1>Success</h1>

  }
}

export default UserForm
