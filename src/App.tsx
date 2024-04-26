import React from 'react';
import { BrowserRouter,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Generate from './components/generate/Generate';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>

      
    </div>
  );
}

export default App;
