import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder: normally you'd send signup request
    navigate('/');
  };

  return (
    <section className="page signup bg-gray-100 py-12">
      <Container maxWidth="xs">
        <Paper elevation={3} className="p-8">
          <Typography variant="h5" className="text-center mb-4">Create an account</Typography>
          <form className="auth-form" onSubmit={handleSubmit}>
            <TextField label="Full name" fullWidth className="mb-4" />
            <TextField label="Email" fullWidth className="mb-4" />
            <TextField label="Password" type="password" fullWidth className="mb-4" />
            <Button variant="contained" color="primary" fullWidth>Create account</Button>
          </form>
        </Paper>
      </Container>
    </section>
  );
};

export default Signup;
