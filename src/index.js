import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import App from './App';
import About from './About';
import Contact from './Contact';
 
const routing = (
  <BrowserRouter>
    <div>
      <h3>Gerardo Moreno Souffle | React Práctica 4 | Diseño de Interfaces | Ing. Diseño de Interfaces | 8vo. Semestre</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </div>
  </BrowserRouter>
)
 
ReactDOM.render(routing, document.getElementById('root'));