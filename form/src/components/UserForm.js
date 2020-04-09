import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  })
  const nextStep = () => {
    //const {step} = step;
    setStep(step + 1);
  }

  const prevStep = () => {
    //const {step} = step;
    setStep(step - 1);
  }

  const handleChange = input => e =>{
    setInfo({
        ...info,
       [input]: e.target.value
    })
  }

  const stepSwitcher = (step) => {
    switch(step){
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            info={info}
           />
        );
      case 2: 
        return( <h1>Form Personal Details</h1>);
      case 3:
        return (<h1>Confirm</h1>);

      case 4:
        return (<h1>Success</h1>);

      default:
        return 0;
    }
  }

  return(
    <div>
      {stepSwitcher(step)}
    </div>
  )
}

export default UserForm
