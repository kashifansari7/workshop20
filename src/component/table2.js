import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: 300,
  },
  tableCellStyle2:{
    backgroundColor:'#f7f7f7',

  },
  tableCellStyle1:{
    backgroundColor:'#e8f5fe',
  
  },
  
});

function createData(name) {
  return { name};
}




export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table  size="small" aria-label="a dense table">
        <TableHead className={classes.tableCellStyle1}>
            <TableRow>
                <TableCell>Family History of surgical Complications</TableCell>
            </TableRow>
         
        </TableHead>
        <TableHead className={classes.tableCellStyle2}>
            <TableRow>
                <TableCell>Yes</TableCell>
            </TableRow>
         
        </TableHead>
      </Table>
    </TableContainer>
  );
}
