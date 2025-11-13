import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Paper, Typography, TextField, Button, Stack, Box } from '@mui/material';

const Login = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault();
    if (typeof onClose === 'function') onClose();
    navigate('/signup');
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
      className="flex items-center justify-center p-4"
    >
      <Paper elevation={4} className="p-8 rounded-2xl w-96 mx-auto">
        <Typography
          variant="h4"
          className="text-center mb-6 font-bold text-gray-800"
          id="login-modal-title"
        >
          Login
        </Typography>

        <form onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={4}>
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
            <Stack spacing={3}>
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
      </Paper>
    </Modal>
  );
};

export default Login;
