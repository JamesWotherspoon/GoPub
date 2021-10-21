import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Navbars from './components/Navbars';
import Showcase from './components/Showcase';
import PubApi from './components/PubApi';

function App() {
  return (
    <div className="App">
      <Navbars />
      <Showcase />
      <Button variant="warning">Hello World!</Button>
      <PubApi />
    </div>
  );
}

export default App;
