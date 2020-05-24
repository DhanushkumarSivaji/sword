import React from 'react';
// import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHeadView from './TableHeadView'
import TableBodyView from './TableBodyView';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// // const activeTab = useSelector(state => state.activeTab)

// function createData(name, age, joindate, country, gender, skills) {
//   return { name, age, joindate, country, gender, skills };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function EmployeeTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHeadView />
        <TableBodyView />
      </Table>
    </TableContainer>
  );
}
