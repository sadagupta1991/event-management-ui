import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const EventForm: React.FC<{ onSubmit: (eventData: any) => void }> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, date, description });
        setTitle('');
        setDate('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <TextField
                label="Event Title"
                variant="outlined"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label="Event Date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
};

export default EventForm;