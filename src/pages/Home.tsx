import React from 'react';
import Header from '../components/Header';
import EventList from '../components/EventList';

const Home: React.FC = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <h1 className="text-3xl font-bold my-4">Welcome to the Event Management UI</h1>
            <EventList />
        </div>
    );
};

export default Home;