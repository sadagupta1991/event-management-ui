import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, TextField, Button, Stack } from '@mui/material';

const Auth = ({ onClose }) => {
  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault();
    if (typeof onClose === 'function') onClose();
    navigate('/signup');
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 p-4">
      <div elevation={4} className="p-8 rounded-2xl w-full max-w-md">
        {/* MUI Stack handles spacing properly */}
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={3}>
            <TextField
              label="Email"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
            <Stack spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Login
              </Button>
              <Button
                variant="outlined"
                onClick={handleSignupClick}
                size="large"
                fullWidth
              >
                Signup
              </Button>
            </Stack>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default Auth;
