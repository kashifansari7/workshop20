import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table1 from "./table1.js";
import Table2 from "./table2.js";
import Table3 from "./table3.js";
import BottomTable from "./bottomTable.js"; 
import IconButton from "./iconbutton.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    color: 'black',
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  tab: {
    maxWidth: '150px',
    fontSize: '12px',
    fontWeight: '400',
    textTransform: 'none',
    borderRight: '1px solid #f7f7f7',
    
  },
  tabPanel: {
    borderTop: '1px solid #f7f7f7'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="List of prior surgeries" {...a11yProps(0)} className={classes.tab} />
          <Tab label="List of medical diagnosis" {...a11yProps(1)} className={classes.tab} />
          <Tab label="List of medications" {...a11yProps(2)} className={classes.tab} />
          <Tab label="Airway Evaulation" {...a11yProps(3)} className={classes.tab} />
          <Tab label="Anesthsia Clearance and Reccomendation" {...a11yProps(4)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
      <Table1></Table1>
      <br />
      <Table2></Table2>
      <br />
      <Table3></Table3>
      <br />
      <p>Previous</p>
      
      <BottomTable></BottomTable>
      <IconButton></IconButton>
      
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        
        List of prior surgeries
      </TabPanel>
      <TabPanel value={value} index={2}>
        List of medical diagnosis
      </TabPanel>
      <TabPanel value={value} index={3}>
        List of medical diagnosis
      </TabPanel>
      <TabPanel value={value} index={4}>
        Airway Evaulation
      </TabPanel>
      <TabPanel value={value} index={5}>
        Anesthesia Clearnce and Recommendation
      </TabPanel>
    </div>
  );
}
