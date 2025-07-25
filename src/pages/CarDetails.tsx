import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box, CircularProgress } from '@mui/material';
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

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      axios.get<Car>(`http://localhost:5033/Car/${id}`)
        .then(res => setCar(res.data))
        .catch(() => setCar(null))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>;
  if (!car) return <Typography variant="h6">Car not found.</Typography>;

  return (
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h5">{car.brand} {car.model}</Typography>
          <Typography color="textSecondary">Year: {car.year}</Typography>
          <Typography color="textSecondary">Mileage: {car.mileage} km</Typography>
          <Typography color="textSecondary">Condition: {car.condition}</Typography>
          <Typography color="primary" fontWeight="bold">${car.price}</Typography>
          <Typography variant="body1" mt={2}>{car.description}</Typography>
          <Box mt={2}>
            <Button variant="contained" color="primary">Buy</Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CarDetails; 