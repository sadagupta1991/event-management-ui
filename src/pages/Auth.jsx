import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

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
    <section className="page auth bg-gray-100 py-12">
      <Container maxWidth="xs">
        <Paper elevation={3} className="p-8">
          <Typography variant="h5" className="text-center mb-4">Login</Typography>
          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <TextField label="Email" fullWidth className="mb-4" />
            <TextField label="Password" type="password" fullWidth className="mb-4" />
            <div className="flex justify-center gap-4">
              <Button variant="contained" color="primary">Login</Button>
              <Button variant="outlined" onClick={handleSignupClick}>Signup</Button>
            </div>
          </form>
        </Paper>
      </Container>
    </section>
  );
};

export default Auth;
