import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

// Dashboard component to display the projects on the dashboard page.
class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }
  // Render the projects on the dashboard page.
  render() {
    const { projects } = this.props.project;
    // Display the projects on the dashboard page.
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              {/* Create a new project button */}
              <CreateProjectButton />
              
              <br />
              <hr />
              {projects.map(project => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// Define the properties of the Dashboard component.
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};
// Map the state to the properties of the Dashboard component.
const mapStateToProps = state => ({
  project: state.project
});
// Connect the Dashboard component to the Redux store.
export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);