import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';

// Mock data for now
const initialNotifications = [
  { id: '1', message: 'Your car listing was approved.', isRead: false },
  { id: '2', message: 'Order #1234 has been paid.', isRead: false },
];

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>Notifications</Typography>
      <Grid container spacing={2}>
        {notifications.map(n => (
          <Grid item xs={12} key={n.id}>
            <Card sx={{ backgroundColor: n.isRead ? '#f5f5f5' : 'white' }}>
              <CardContent>
                <Typography>{n.message}</Typography>
                {!n.isRead && (
                  <Button size="small" onClick={() => markAsRead(n.id)}>Mark as read</Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Notifications; 