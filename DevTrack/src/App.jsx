// Importing necessary CSS file for styling
import './App.css';

// Importing necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing custom components
import CreateProjectForm from './components/CreateProjectForm';
import WelcomePage from './components/WelcomePage';

// Main App component
const App = () => {
  return (
    // Setting up the Router for handling routes
    <Router>
      <Routes>
        {/* Route for the WelcomePage component */}
        <Route path="/" element={<WelcomePage />} />
        
        {/* Route for the CreateProjectForm component */}
        <Route path="/create-project" element={<CreateProjectForm />} />
      </Routes>
    </Router>
  );
};

// Exporting the App component as the default export
export default App;