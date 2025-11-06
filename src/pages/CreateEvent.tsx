import React from 'react';
import EventForm from '../components/EventForm';

const CreateEvent: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Event</h1>
            <EventForm />
        </div>
    );
};

export default CreateEvent;