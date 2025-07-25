import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const CreateEditListing: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [condition, setCondition] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend
    alert('Listing saved (mock)');
  };

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" gutterBottom>Create / Edit Car Listing</Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Brand" fullWidth margin="normal" value={brand} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrand(e.target.value)} required />
          <TextField label="Model" fullWidth margin="normal" value={model} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setModel(e.target.value)} required />
          <TextField label="Year" type="number" fullWidth margin="normal" value={year} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYear(e.target.value)} required />
          <TextField label="Mileage" type="number" fullWidth margin="normal" value={mileage} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMileage(e.target.value)} required />
          <TextField label="Condition" fullWidth margin="normal" value={condition} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCondition(e.target.value)} required />
          <TextField label="Price" type="number" fullWidth margin="normal" value={price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)} required />
          <TextField label="Description" fullWidth margin="normal" multiline rows={3} value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Save</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default CreateEditListing; 