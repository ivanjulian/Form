import React from 'react';
import { Button, Paper, Typography, Link, Dialog, DialogContentText, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import { GitHub, LinkedIn, Instagram } from '@material-ui/icons';

type DetailsWindowPropsType = {
  onClose: () => void,
  open: boolean
}

const DetailsWindow:React.FC<any> = (props: DetailsWindowPropsType)=> {
  const { onClose, open } = props;
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} >

      <DialogTitle id="alert-dialog-title">Thanks for using it 👍</DialogTitle>
      <DialogContent>
        <DialogContentText >
          This is an example of form for portfolio.
          Your personal data will store to MongoDB, but won't be passed anywhere.
          After filling and sending the form, the response gonna come to your email 😊 <br />
          <Link href="https://ivanjulian.github.io/">About author</Link> <br />
          <Link href="https://github.com/ivanjulian" target="_blank">
            <GitHub color="primary" />
          </Link>

          <Link href="https://www.linkedin.com/in/ivan-khizhnyak/" target="_blank">
            <LinkedIn color="primary" />
          </Link>

          <Link href="https://www.instagram.com/" target="_blank">
            <Instagram color="primary" />
          </Link>
        </DialogContentText>
        <div className="btn-container">
          <Button
            className="Button "
            variant="contained"
            color="primary"
            onClick={onClose}
            autoFocus
          >
            Got it!
          </Button>
        </div>

      </DialogContent>
    </Dialog>

  )
}

export default DetailsWindow
