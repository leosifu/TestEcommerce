import {TableBody, } from '@mui/material';

import ItemsTableRow from './ItemsTableRow';

const ItemsTableBody = ({items, }) => (
  <TableBody>
    {
      items.map(item => 
        <ItemsTableRow item={item} />
      )
    }
  </TableBody>
)

export default ItemsTableBody;
