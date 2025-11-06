import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Event Management
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Create Event</Button>
                <Button color="inherit">Events</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;