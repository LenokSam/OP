import React from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './construction.css'

function Constrtuction(props) {
  const {layers, visible, h0, } = props
  
  return (
    <div className={visible ?'construction-layers':'invisible'}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Слой</TableCell>
            <TableCell align="center">Тощина (мм)</TableCell>
            <TableCell align="center">К-т теплопроводности&nbsp;(Вт/м2К)</TableCell>
            <TableCell align="center">Приведенная толщина&nbsp;(м)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {layers.map((layer) => {
            const{ name, thickness, transcalency } = layer;
            const h0= thickness/transcalency*1.16
            return(
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {layer.name}
              </TableCell>
              <TableCell align="center">{thickness}</TableCell>
              <TableCell align="center">{transcalency}</TableCell>
              <TableCell align="center">{Math.ceil((h0)*100)/100}</TableCell>
            </TableRow>
            )}
          )}
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Суммарная приведенная толщина
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center">{Math.ceil((h0)*100)/100}</TableCell>
            </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default React.memo(Constrtuction)