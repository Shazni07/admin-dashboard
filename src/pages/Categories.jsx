import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PopupForm from '../components/PopupForm';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, TablePagination } from '@mui/material';

const Categories = () => {
  const [categories, setCategories] = useState([
    { name: 'Electronics', description: 'Devices and gadgets', shopCount: 15 },
    { name: 'Clothing', description: 'Apparel and accessories', shopCount: 25 },
  ]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleAddCategory = (data) => {
    setCategories([...categories, { ...data, shopCount: 0 }]);
    setOpen(false);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(search.toLowerCase()) ||
      category.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <TextField
            label="Search"
            variant="outlined"
            value={search}
            onChange={handleSearch}
            sx={{ width: '300px' }}
          />
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Add Category
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Number of Shops</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCategories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category, index) => (
              <TableRow key={index}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>{category.shopCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredCategories.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        <PopupForm
          open={open}
          onClose={() => setOpen(false)}
          fields={[
            { name: 'name', label: 'Category Name', required: true },
            { name: 'description', label: 'Description', required: true },
          ]}
          onSubmit={handleAddCategory}
        />
      </div>
    </div>
  );
};

export default Categories;
