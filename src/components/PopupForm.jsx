import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const PopupForm = ({ open, onClose, fields, onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Entry</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 16 }}>
          {fields.map((field, index) => (
            <Controller
              key={index}
              name={field.name}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label={field.label}
                  fullWidth
                  margin="normal"
                  required={field.required}
                />
              )}
            />
          ))}
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
