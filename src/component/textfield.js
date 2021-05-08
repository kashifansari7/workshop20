import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 2px',
    display: 'flex',
    alignItems: 'center',
    width: 217,
    height:'30px',
  },
  input: {
    marginLeft: theme.spacing(5),
    flex: 1,
    
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchContainer:{
    marginBottom:'10px',
    
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
    <Paper component="form" className={classes.root}>
     
      
     
      <InputBase 
      
        className={classes.input}
        placeholder="Search Patient"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
     
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
      
        <SearchIcon />
      </IconButton>
      
     
     
    </Paper>
    </div>
  );
}
