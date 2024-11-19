import React, { Component } from "react";

// Header component definition
class Header extends Component {
  // render() method defines what UI elements the component will return
  render() {
    return (
      // Navigation bar container with styling classes for Bootstrap
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          {/* Branding of the application, linking to the dashboard */}
          <a className="navbar-brand" href="Dashboard.html">
            Personal Project Management Tool
          </a>
          {/* Button for toggling the navbar on smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Collapsible navbar content */}
          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* Left-side navigation links */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                {/* Link to the dashboard */}
                <a className="nav-link" href="/dashboard">
                  Dashboard
                </a>
              </li>
            </ul>

            {/* Right-side navigation links */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                {/* Link to the registration page */}
                <a className="nav-link" href="register.html">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                {/* Link to the login page */}
                <a className="nav-link" href="login.html">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

// Exporting the Header component for use in other parts of the application
export default Header;
