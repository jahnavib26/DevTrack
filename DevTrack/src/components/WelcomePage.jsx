// import React from 'react';
import { Link } from 'react-router-dom';
import '../css/WelcomePage.css';
// this is a functional component that renders the welcome page
const WelcomePage = () => {
  // return the welcome page
  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to DevTrack!</h1>
        <p className="tagline">Your Journey to Organized and Efficient Projects Starts Here</p>
      </header>

      <main className="welcome-content">
        <p className="welcome-message">
          DevTrack is designed to streamline your workflow, track progress, and ensure
          no task falls through the cracks. Whether you’re managing a team project or
          working on personal goals, DevTrack has everything you need to stay on track.
        </p>
        {/* TODO: Link to the login page before going to create project page */}
        <Link to="/create-project">
          <button className="login-button">
            Create Project
          </button>
        </Link>
      </main>
      {/* TODO: Should create a component that can be import as footer  */}
      <footer className="footer">
        <p>© 2024 DevTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
