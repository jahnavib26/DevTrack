// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProjectForm from './components/CreateProjectForm';
import WelcomePage from './components/WelcomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/create-project" element={<CreateProjectForm />} />
      </Routes>
    </Router>
  );
};

export default App;
