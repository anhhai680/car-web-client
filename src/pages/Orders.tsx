import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

// Mock data for now
const myOrders = [
  { id: '1', car: 'Toyota Camry', status: 'pending', amount: 20000 },
  { id: '2', car: 'Honda Civic', status: 'paid', amount: 18000 },
];

const Orders: React.FC = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>Order History</Typography>
      <Grid container spacing={2}>
        {myOrders.map(order => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{order.car}</Typography>
                <Typography color="textSecondary">Status: {order.status}</Typography>
                <Typography color="primary" fontWeight="bold">${order.amount}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Orders; 