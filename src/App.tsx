import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import CreateEvent from './pages/CreateEvent';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" component={EventDetails} />
        <Route path="/create-event" component={CreateEvent} />
      </Switch>
    </Router>
  );
};

export default App;