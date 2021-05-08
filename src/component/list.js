import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Badge} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  listStyle: {
    marginBottom: '16px',
    backgroundColor:'white',
    padding: '8px',
    height:'45px',
  },
  badgeStyle:{
    backgroundColor:'#46e766',
  },
  listTextStyle:{
    margin:'0px',
    
    
    '& span': {
      fontSize: '12px'
    },
    '& p':{
      fontSize: '10px'
    },
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem className={classes.listStyle}>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.listTextStyle} primary="Sara Smith" secondary="15 Aug 2020" />
        <Badge className={classes.badgeStyle} color="error"  variant="dot"></Badge>

      </ListItem>
      <ListItem className={classes.listStyle}>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.listTextStyle} primary="James Johnson" secondary="No Clearance" />
        <Badge color="secondary" variant="dot"></Badge>
      </ListItem>
      <ListItem className={classes.listStyle}>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.listTextStyle} primary="Patrice Page" secondary="19 Aug 2020" />
        <Badge color="secondary" variant="dot"></Badge>
      </ListItem>
      <ListItem className={classes.listStyle}>
        <ListItemAvatar>
          <Avatar>
          <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.listTextStyle} primary="Derek Diamon" secondary="21 Aug 2020" />
        <Badge color="secondary" variant="dot"></Badge>
      </ListItem>
    </List>
  );
}
