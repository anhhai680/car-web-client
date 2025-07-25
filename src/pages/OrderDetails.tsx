import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';

// Mock data for now
const order = {
  id: '1',
  car: 'Toyota Camry',
  status: 'pending',
  amount: 20000,
  createdAt: '2024-06-01',
  paidAt: null,
};

const OrderDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real app, fetch order by id
  if (id !== order.id) return <Typography>Order not found.</Typography>;

  return (
    <Box mt={4}>
      <Card>
        <CardContent>
          <Typography variant="h5">Order Details</Typography>
          <Typography>Car: {order.car}</Typography>
          <Typography>Status: {order.status}</Typography>
          <Typography>Amount: ${order.amount}</Typography>
          <Typography>Created At: {order.createdAt}</Typography>
          <Typography>Paid At: {order.paidAt || 'Not paid yet'}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetails; 