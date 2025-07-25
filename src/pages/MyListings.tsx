import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Box } from '@mui/material';

// Mock data for now
const myCars = [
  { id: '1', brand: 'Toyota', model: 'Camry', year: 2020, price: 20000 },
  { id: '2', brand: 'Honda', model: 'Civic', year: 2019, price: 18000 },
];

const MyListings: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>My Listings</Typography>
      <Grid container spacing={2}>
        {myCars.map(car => (
          <Grid item xs={12} sm={6} md={4} key={car.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{car.brand} {car.model}</Typography>
                <Typography color="textSecondary">Year: {car.year}</Typography>
                <Typography color="primary" fontWeight="bold">${car.price}</Typography>
                <Box mt={2} display="flex" gap={1}>
                  <Button variant="outlined" color="primary">Edit</Button>
                  <Button variant="outlined" color="error">Delete</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyListings; 