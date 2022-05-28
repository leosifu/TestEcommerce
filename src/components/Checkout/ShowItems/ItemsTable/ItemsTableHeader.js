import {TableHead, TableRow, TableCell, } from '@mui/material';

const TableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell
      >
        Imagen
      </TableCell>
      <TableCell
      >
        Nombre
      </TableCell>
      <TableCell
      >
        Cantidad
      </TableCell>

      <TableCell
      >
        Total
      </TableCell>

      <TableCell
      >
        Eliminar artículo
      </TableCell>
    </TableRow>
  </TableHead>
)

export default TableHeader;
