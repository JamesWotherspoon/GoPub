import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbars';
import Homepage from './components/Homepage/Homepage';
import VenueUnit from './components/Venues/VenueUnit';
import VenueResultsDisplay from './components/Venues/VenueResultsDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/listing" component={VenueResultsDisplay} />
          <Route path="/listing/:venueId" exact component={VenueUnit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
