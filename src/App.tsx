import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRoute from './App.route';

const App = () => {
  return (
    <div>
     <Router>
    { AppRoute}
     </Router>
    </div>
  );
}

export default App;
