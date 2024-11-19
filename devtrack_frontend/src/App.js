import React, { Component } from "react";
import "./App.css"; 
import Dashboard from "./components/Dashboard"; 
import Header from "./components/Layout/Header"; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import AddProject from "./components/Project/AddProject"; 

// App component serves as the root component for the application
class App extends Component {
  // render() method defines the structure of the application
  render() {
    return (
      // Router component provides routing functionality
      <Router>
        <div className="App">
          {/* Header component displays the navigation bar */}
          <Header />
          
          {/* Routes component defines the routing paths */}
          <Routes>
            {/* Route for the home page */}
            <Route path="/" element={<Dashboard />} />
            
            {/* Route for the dashboard page */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Route for the Add Project page */}
            <Route path="/addProject" element={<AddProject />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
