import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => (
  <section className="page about bg-gray-100 py-12">
    <Container maxWidth="md">
      <Typography variant="h2" className="text-3xl font-bold text-center mb-4">About Us</Typography>
      <Typography variant="body1" className="text-center">
        EventPlannet is a team of designers and event managers who create
        immersive, memorable experiences for clients across industries.
      </Typography>
    </Container>
  </section>
);

export default About;
