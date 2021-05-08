import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor:'#00a0f0',
    color:'white',
    textTtransform: 'none',
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="text"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add Surgery
      </Button>
      
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      
      
    </div>
  );
}
