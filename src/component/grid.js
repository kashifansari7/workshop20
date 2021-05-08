import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from "./avatar.js";
import Letter from "./letteravatar.js";
import { Tab } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontSize: '0.650rem',
    lineHeight: 0.80,
  },
  paper: {
    height: 240,
    width: 990,
  },
  control: {
    padding: theme.spacing(2),
  },
 
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
         <Grid item xs={1}>
             <Avatar></Avatar>
             
        
        
       
    </Grid>
      
     
      <Grid item xs={3}>
        
        
        <p><span>Phone</span>: <b>302-857-9685</b></p>
        <p><span>Email</span>: <b>sarasmith@gmail.com</b></p>
        <p><span>Gender</span>: <b>Female</b></p>
        <p><span>Age</span>: <b>45</b></p>
      </Grid>
      <Grid item xs={3}>
      <p></p>
        <p><span>Surgery type</span>: <b>Rotator Cuff Repair</b></p>
        <p><span>Surgery Date</span>: <b>15 Aug 2020</b></p>
        <p><span>Height(cm)</span>: <b>163</b></p>
        <p><span>Weight(lb)</span>: <b>110</b></p>
        <p><span>Phone</span>: <b>19</b></p>
      </Grid>
      
      <Grid item xs={3}>
      <p></p>
        <p><span>Anesthesiologist</span>: <b>Dr.Christina Hardaway</b></p>
        <p><span>Anesthesiologist Phone</span>: <b>301-896-8745</b></p>
        <p><span>Anesthesiologist Email</span>: <b>Christina@h2a.com</b></p>
        
      </Grid>
     
      <Grid item xs={2}>
      <p></p>
        <p>Surgery Clearnce</p>
      
        <Letter></Letter>
        

        
      </Grid>
      
    </Grid>
    
     
  );
}
