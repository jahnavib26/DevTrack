import React, { Component } from "react"; 

// Class component for displaying a single project item
class ProjectItem extends Component {
  // render() method defines the JSX structure for displaying the project item
  render() {
    return (
      <div className="container">
        {/* Card container for the project item with styling classes */}
        <div className="card card-body bg-light mb-3">
          <div className="row">
            {/* Column to display a project type or identifier */}
            <div className="col-2">
              <span className="mx-auto">REACT</span> {/* Placeholder for project type */}
            </div>

            {/* Column to display project details */}
            <div className="col-lg-6 col-md-4 col-8">
              <h3>Spring / React Project</h3> {/* Project title */}
              <p>Project to create a Kanban Board with Spring Boot and React</p> {/* Project description */}
            </div>

            {/* Column to display action links (visible only on large screens) */}
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                {/* Link to the project board */}
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1"> Project Board </i>
                  </li>
                </a>
                
                {/* Link to update project information */}
                <a href="#">
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1"> Update Project Info</i>
                  </li>
                </a>
                
                {/* Link to delete the project */}
                <a href="#">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem; 
