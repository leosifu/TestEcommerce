import { TableBody, TableRow, TableCell } from '@mui/material';

const CardDetailsTableBody = ({card, }) => {

  return (
    <TableBody>
      <TableRow>
        <TableCell style={{ fontWeight: 'bold' }}>
          Tipo
        </TableCell>
        <TableCell>
          {card.type}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ fontWeight: 'bold' }}>
          Raza
        </TableCell>
        <TableCell>
          {card.race}
        </TableCell>
      </TableRow>

      {
        card.archetype &&
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>
            Arquetipo
          </TableCell>
          <TableCell>
            {card.archetype}
          </TableCell>
        </TableRow>
      }
      {
        card.attribute &&
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>
            Atributo
          </TableCell>
          <TableCell>
            {card.attribute}
          </TableCell>
        </TableRow>
      }
      {
        card.atk &&
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>
            Ataque
          </TableCell>
          <TableCell>
            {card.atk}
          </TableCell>
        </TableRow>
      }
      {
        card.def &&
        <TableRow>
          <TableCell style={{ fontWeight: 'bold' }}>
            Defensa
          </TableCell>
          <TableCell>
            {card.def}
          </TableCell>
        </TableRow>
      }

    </TableBody>
  )
}

export default CardDetailsTableBody;
