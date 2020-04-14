import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success'
import './FormUserDetails.scss';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  occupation: '',
  city: '',
  bio: ''
}

const UserForm = () => {
  const [step, setStep] = useState(1);
  const [info, setInfo] = useState(initialState)

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  const goToStart = () => {
    setStep(1);
    setInfo(initialState);
  }

  const handleChange = data => {
    setInfo(data)
  }

  const stepSwitcher = (step) => {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            info={info}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            info={info}
          />);
      case 3:
        return (
          <Confirm
            nextStep={nextStep}
            prevStep={prevStep}
            info={info}
          />);

      case 4:
        return (
          <Success
            goToStart={goToStart}
          />
        );

      default:
        return 0;
    }
  }

  return (
    <div>
      {stepSwitcher(step)}
    </div>
  )
}

export default UserForm
