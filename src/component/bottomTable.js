
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontWeight:500,
   
  },
  table1:{
    textAlign:'left',
    backgroundColor:'#e8f5fe',
   
    lineHeight:'14px',
    padding:'5px',
  },
  table2:{
    fontSize:'12px',
    lineHeight:'15px',
  },
  table3:{
    backgroundColor:'#f7f7f7',
  }

});




export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.table1}>
          <TableRow >
            <TableCell className={classes.table2}>Surgery Type</TableCell>
            <TableCell className={classes.table2}>Date</TableCell>
            <TableCell className={classes.table2}>Aneshtia Type</TableCell>
            <TableCell className={classes.table2}>Surgical Complications</TableCell>
            <TableCell className={classes.table2}>Aneshthetic Complications(nausea,vomiting,difficult intubations</TableCell>
            <TableCell ></TableCell>
            <TableCell></TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow className={classes.table3}>
          
              <TableCell className={classes.table2} align="left">shoulder reconstructions</TableCell>
              <TableCell  className={classes.table2} align="left">January 2008</TableCell>
              <TableCell  className={classes.table2} align="left">General "Breathing Tube"</TableCell>
              <TableCell  className={classes.table2}align="left">No</TableCell>
              <TableCell  className={classes.table2} align="left">No</TableCell>
              <TableCell  className={classes.table2} align="left"><DeleteIcon/></TableCell>
              <TableCell  className={classes.table2} align="left"><CreateIcon/></TableCell>
    

            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
