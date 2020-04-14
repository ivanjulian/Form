import React, { Fragment } from 'react'
import './FormUserDetails.scss';
import MyAppBar from './MyCustomComponents/MyAppBar';
import { Button, Paper, Typography } from '@material-ui/core';
import './FormikLearninig.scss';



// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: '5px',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   textField: {
//     margin: '5px',
//     width: '25ch',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   data: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   button: {
//     margin: '5px'
//   },
//   reply: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   titleReply: {
//     marginTop: '30px',
//     flexGrow: 1,
//     textAlign: 'center'
//   },
// });

function Success({goToStart}) {

  //const classes = useStyles();

  return (
    <Fragment>
      <MyAppBar label="Success!" />

      <div className = 'FormikLearning Content'>
        <Paper className="PaperSuccess">
          <div className="container">
            <Typography variant="h6" /*className="textTest"{classes.titleReply}*/>
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

export default Success
