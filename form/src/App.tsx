import React from 'react';
import UserForm from './components/UserForm';
import './UserForm.scss';
import GoogleMapComponent from './components/GoogleMapComponent';
const App = () => {
  return (
    <div className="App">
      <UserForm />
      {/* <GoogleMapComponent /> */}
    </div>
  );
}

export default App;
