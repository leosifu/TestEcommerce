import { TableContainer, Table, } from '@mui/material';

import CardDetailsTableBody from './CardDetailsTableBody';

const CardDetailsTable = ({card, }) => {

  return (
    <TableContainer sx={{ maxWidth: 400 }}>
      <Table size="small">
        <CardDetailsTableBody card={card} />
      </Table>
    </TableContainer>
  )
}

export default CardDetailsTable;
