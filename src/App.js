import React from "react";
import "./styles/App.css";
import { Container, Typography, AppBar, Toolbar, IconButton, Button, Badge} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "./component/drawer.js";
import PicAvatar from "./component/picavatar.js";
import NotificationsIcon from '@material-ui/icons/Notifications';


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  buttonMargin: {
    marginRight: "20px"
  },
  btnContainer:{
    width: "100%",
    marginLeft:"115px",
    
   
  },
  rightContainer: {
    float: 'right'
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <AppBar position="fixed" color="white" className={classes.appBar}>
        <Toolbar>
          <div className={classes.btnContainer}>
            <Button color="inherit" className={classes.buttonMargin}>PATIENTS</Button>
            <Button color="inherit" className={classes.buttonMargin}>CALENDER</Button>
            <Button color="inherit" className={classes.buttonMargin}>USERS</Button>
            <Button color="inherit" className={classes.buttonMargin}>BILLING</Button>
            <div className={classes.rightContainer}>
              <Badge color="secondary" variant="dot" >
                <NotificationsIcon/>
              </Badge>
              <PicAvatar></PicAvatar>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer></Drawer>
    </Container>
  );
}

export default App;

