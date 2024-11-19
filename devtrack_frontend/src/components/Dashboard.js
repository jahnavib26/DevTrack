import React, { Component } from "react"; 
import ProjectItem from "./Project/ProjectItem"; 
import CreateProjectButton from "./Project/CreateProjectButton"; 

// Class component to render the dashboard
class Dashboard extends Component {
  // render() method defines the structure and layout of the dashboard
  render() {
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Header for the dashboard */}
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              
              {/* Button to create a new project */}
              <CreateProjectButton />
              <br />
              <hr />
              
              {/* Display a project item */}
              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
