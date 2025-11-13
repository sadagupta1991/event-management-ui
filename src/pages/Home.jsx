import React from 'react';
import { Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="page home bg-gray-100 py-12">
      <Container maxWidth="md">
        <div className="hero text-center">
          <Typography variant="h1" className="text-4xl font-bold mb-4">EventPlannet</Typography>
          <Typography variant="h5" className="tagline mb-8">Designing memorable spaces for people and events.</Typography>
          <div className="hero-actions">
            <Button component={Link} to="/auth" variant="contained" color="primary" className="mr-4">Get Started</Button>
            <Button component={Link} to="/events" variant="outlined" color="primary">Our Work</Button>
          </div>
        </div>
        <div className="features mt-12">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div className="feature text-center">
                <Typography variant="h6" className="font-bold mb-2">Event Design</Typography>
                <Typography>Custom themes, moodboards and end-to-end event styling.</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature text-center">
                <Typography variant="h6" className="font-bold mb-2">Corporate Services</Typography>
                <Typography>On-brand experiences for product launches and conferences.</Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="feature text-center">
                <Typography variant="h6" className="font-bold mb-2">Private Celebrations</Typography>
                <Typography>Intimate and large-scale celebrations crafted to your vision.</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Home;
