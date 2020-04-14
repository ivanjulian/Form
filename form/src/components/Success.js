import React, { Fragment } from 'react'
import { Button, Paper, Typography } from '@material-ui/core';

import MyAppBar from './MyCustomComponents/MyAppBar';

import './FormikLearninig.scss';

function Success({goToStart}) {


  return (
    <Fragment>
      <MyAppBar label="Success!" />

      <div className = 'FormikLearning Content'>
        <Paper className="PaperSuccess">
          <div className="container">
            <Typography variant="h6">
              Your data was sent. We will answer to your email.
          </Typography>
          </div>


          <div className="container">
            <Button
              className="Button"
              variant="contained"
              color="primary"
              onClick={goToStart}
            >
              Got it!
          </Button>
          </div>
        </Paper>
      </div>

    </Fragment>
  )
}

export default Success;
