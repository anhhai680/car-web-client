import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  condition: string;
  price: number;
  description: string;
}

const Home: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get<Car[]>('http://localhost:5033/Car')
      .then(res => setCars(res.data))
      .catch(() => setCars([]))
      .finally(() => setLoading(false));
  }, []);

  const filteredCars = cars.filter(car =>
    car.brand.toLowerCase().includes(search.toLowerCase()) ||
    car.model.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>Car Listings</Typography>
      <TextField
        label="Search by brand or model"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>
      ) : (
        <Grid container spacing={2}>
          {filteredCars.map(car => (
            <Grid item xs={12} sm={6} md={4} key={car.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{car.brand} {car.model}</Typography>
                  <Typography color="textSecondary">Year: {car.year}</Typography>
                  <Typography color="textSecondary">Mileage: {car.mileage} km</Typography>
                  <Typography color="textSecondary">Condition: {car.condition}</Typography>
                  <Typography color="primary" fontWeight="bold">${car.price}</Typography>
                  <Typography variant="body2" mt={1}>{car.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Home; 