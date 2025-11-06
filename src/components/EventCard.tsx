import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description }) => {
  return (
    <Card className="mb-4">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {date}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventCard;