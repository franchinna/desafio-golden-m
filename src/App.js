import React from 'react';
import './App.css';
import Home from './pages/Home';
import Table from './pages/Table';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
        <Route path="/home" component={Home}/>
        <Route path="/table" component={Table}/>
    </Router>
  );
}

export default App;