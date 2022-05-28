import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, } from '@mui/material';

import ItemsTableHeader from './ItemsTableHeader';
import ItemsTableBody from './ItemsTableBody';

const ItemsTable = ({items, }) => {

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 480 }}>
        <Table stickyHeader aria-label="sticky table">
          <ItemsTableHeader />
          <ItemsTableBody items={items} />
        </Table>
      </TableContainer>
    </Paper>
  )
}

export default ItemsTable;
