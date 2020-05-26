import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import TableHeadView from './TableHeadView'
import TableBodyView from './TableBodyView'

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
