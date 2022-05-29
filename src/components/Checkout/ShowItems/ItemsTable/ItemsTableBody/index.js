import {TableBody, } from '@mui/material';

import ItemsTableRow from './ItemsTableRow';

const ItemsTableBody = ({items, }) => (
  <TableBody>
    {
      items.map(item =>
        <ItemsTableRow key={`table${item.id}`} item={item} />
      )
    }
  </TableBody>
)

export default ItemsTableBody;
