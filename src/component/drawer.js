import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import TextField from "./textfield.js";
import ListPhotos from "./list.js";
import Grid from "./grid.js";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Tabs from "./tabs.js";




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    // flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    backgroundColor: '#e8f5fe',
    padding: '0px 10px',
    marginLeft:'2px',
    height: '100%'
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    background: '#f7f7f7'
    
  },
  NameConatiner:{
    marginLeft: '83px',
    marginBottom: '-5px',
  
  },
  textStyle:{
    float:'right',
  },
    
  morehorizStyle:{
    float:'right',
  },
  Patientstyle:{
    display:'inline-block',
    marginLeft:'10px',
    
  }
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <p>Pateints</p>
          <TextField></TextField>
          <ListPhotos></ListPhotos>
          
          
        </div>
      </Drawer>
      <main className={classes.content}>
        <div >
      <p className={classes.Patientstyle}> Patient Information</p>
      <p className={classes.morehorizStyle}><MoreHorizIcon/></p>
      <p className={classes.textStyle}>Last updated 10:25AM today</p>
      
     
      
      </div>
      
      
      <p className={classes.NameConatiner}>Sara Smith</p>
      
      

        <Grid></Grid>
      <Tabs></Tabs>
        
        
        
        
       
      </main>
    </div>
  );
}