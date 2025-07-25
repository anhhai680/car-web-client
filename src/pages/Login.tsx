import React, { useState } from 'react';
import { Box, Tabs, Tab, TextField, Button, Typography, Paper } from '@mui/material';

const Login: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => setTab(newValue);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement real authentication
    alert(tab === 0 ? 'Logged in (mock)' : 'Signed up (mock)');
  };

  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            {tab === 0 ? 'Login' : 'Sign Up'}
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          {tab === 0 ? "Don't have an account? Sign up above." : "Already have an account? Login above."}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login; 