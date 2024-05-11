import React from 'react';

// npm install react-router-dom
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <div className='container-fluid'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler navbar-toggler-sm" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">classifieds.aktulip.org</Link>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Classifieds</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;