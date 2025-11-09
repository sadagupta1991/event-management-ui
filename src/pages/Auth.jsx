import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, TextField, Button, Box } from '@mui/material';

// Accept onClose when rendered inside the Modal so we can close it if needed
const Auth = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e && e.preventDefault();
    if (typeof onClose === 'function') onClose();
    // navigate to the signup route
    navigate('/signup');
  };

  return (
    <Box className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <Paper elevation={3} className="p-8 rounded-lg">
          <Typography variant="h4" className="text-center mb-6 font-bold">Login</Typography>
          <form className="" onSubmit={(e) => e.preventDefault()}>
            <Box>
              <TextField label="Email" fullWidth variant="outlined"/>
            </Box>
            <Box>
              <TextField label="Password" type="password" fullWidth variant="outlined" />
            </Box>
            <Box display="flex" flexDirection="column" gap={2}>
              <Button variant="contained" color="primary" size="large">Login</Button>
              <Button variant="outlined" onClick={handleSignupClick} size="large">Signup</Button>
            </Box>
          </form>
        </Paper>
    </Box>
  );
};

export default Auth;
