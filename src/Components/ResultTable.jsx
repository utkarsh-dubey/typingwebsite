import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useTheme } from '../Context/ThemeContext'

const ResultTable = ({data}) => {
  const {theme} = useTheme();
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{color: theme.title, textAlign: 'center'}}>
                WPM
              </TableCell>
              <TableCell style={{color: theme.title, textAlign: 'center'}}>
                Accuracy
              </TableCell>
              <TableCell style={{color: theme.title, textAlign: 'center'}}>
                Characters
              </TableCell>
              <TableCell style={{color: theme.title, textAlign: 'center'}}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(doc=>(
              <TableRow>
                <TableCell style={{color: theme.title, textAlign: 'center'}}>
                  {doc.wpm}
                </TableCell>
                <TableCell style={{color: theme.title, textAlign: 'center'}}>
                  {doc.accuracy}
                </TableCell>
                <TableCell style={{color: theme.title, textAlign: 'center'}}>
                  {doc.characters}
                </TableCell>
                <TableCell style={{color: theme.title, textAlign: 'center'}}>
                  {doc.timestamp.toDate().toString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>


    </div>
  )
}

export default ResultTable