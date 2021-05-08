import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    display:'center',
    '& > *': {
      margin: theme.spacing(0),
    
      
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    
  },

}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Avatar className={classes.orange} style={{fontSize:13}}>Yes</Avatar>
      
    </div>
  );
}
