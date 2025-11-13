import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const EVENT_TYPES = [
  { id: 'corporate', title: 'Corporate Events', description: 'Product launches, conferences, awards and corporate gatherings with on-brand staging and technical production.' },
  { id: 'house', title: 'House Party', description: 'Intimate home celebrations with tailored styling, lighting and decor to match your vibe.' },
  { id: 'birthday', title: 'Birthday Party', description: 'Creative themes, cake tables and entertainment planning for kids and adults.' },
  { id: 'baby', title: 'Baby Shower', description: 'Warm, memorable showers with tasteful styling, games and keepsakes.' },
  { id: 'balloon', title: 'Balloon Decorations', description: 'Bold and playful balloon installations, arches and table arrangements.' },
];

const Events = () => {
  return (
    <section className="page events bg-gray-100 py-12">
      <div className="container mx-auto">
        <Typography variant="h2" className="text-3xl font-bold text-center mb-4">Events</Typography>
        <Typography variant="body1" className="text-center mb-8">
          We collaborate with clients to build concept-to-completion event
          experiences — logistics, styling and production.
        </Typography>

        <div className="w-full max-w-2xl mx-auto">
          {EVENT_TYPES.map((ev) => (
            <Accordion key={ev.id} className="mb-4">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${ev.id}-content`}
                id={`${ev.id}-header`}
              >
                <Typography variant="h6" className="font-semibold">{ev.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {ev.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
