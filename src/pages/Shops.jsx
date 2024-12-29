import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import PopupForm from '../components/PopupForm';
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const Shops = () => {
  const [open, setOpen] = useState(false);
  const [shops, setShops] = useState([
    { name: 'Shop 1', owner: 'Owner 1', contact: '123456789', address: 'Address 1', status: 'Active' },
  ]);

  const handleAddShop = (data) => {
    setShops([...shops, data]);
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
          Add Shop
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shops.map((shop, index) => (
              <TableRow key={index}>
                <TableCell>{shop.name}</TableCell>
                <TableCell>{shop.owner}</TableCell>
                <TableCell>{shop.contact}</TableCell>
                <TableCell>{shop.address}</TableCell>
                <TableCell>{shop.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <PopupForm
          open={open}
          onClose={() => setOpen(false)}
          fields={[
            { name: 'name', label: 'Shop Name', required: true },
            { name: 'owner', label: 'Owner Name', required: true },
            { name: 'contact', label: 'Contact', required: true },
            { name: 'address', label: 'Address', required: true },
            { name: 'status', label: 'Status', required: true },
          ]}
          onSubmit={handleAddShop}
        />
      </div>
    </div>
  );
};

export default Shops;
