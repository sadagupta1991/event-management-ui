import React from 'react';
import { Typography, Container, Link } from '@mui/material';

const Contact = () => (
  <section className="page contact bg-gray-100 py-12">
    <Container maxWidth="md">
      <Typography variant="h2" className="text-3xl font-bold text-center mb-4">Contact Us</Typography>
      <Typography variant="body1" className="text-center">
        Reach out at <Link href="mailto:hello@eventplannet.example">hello@eventplannet.example</Link>
      </Typography>
    </Container>
  </section>
);

export default Contact;
