import React from 'react';
import { Table as MuiTable, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@mui/material';

const Table = ({ columns, rows, search, onSearch, page, rowsPerPage, setPage, setRowsPerPage }) => {
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => setRowsPerPage(parseInt(event.target.value, 10));

  const filteredRows = rows.filter((row) =>
    columns.some((column) =>
      row[column.field].toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      <TablePagination
        component="div"
        count={filteredRows.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Table;
