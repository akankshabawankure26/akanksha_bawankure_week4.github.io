import React from 'react';
import JobBoard from './components/JobBoard';
import ApplyForm from './components/ApplyForm';
import Home from './components/Home.js';
import { Route, Router, Routes } from 'react-router-dom';

import SearchBar from './components/SearchBar.js';
import NavBar from './components/NavBar.js';


const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'New York', type: 'Full-time', description: 'Exciting job for frontend devs.' },
  { id: 2, title: 'Backend Developer', company: 'Innovate Inc.', location: 'San Francisco', type: 'Part-time', description: 'Backend dev opportunity.' },
  // Add more jobs...
];

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board" element={<JobBoard jobs={jobs} />} />
          <Route path="/apply" element={<ApplyForm />} />
          <Route path="/search" element={<SearchBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
