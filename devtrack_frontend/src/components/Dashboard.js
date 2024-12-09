import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects(); // Fetch the projects when the component mounts
  }

  render() {
    const { projects } = this.props.project; // Destructure the 'projects' array from the Redux store's project state
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
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

// Define the prop types for the Dashboard component
Dashboard.propTypes = {
  project: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

// Map the state from the Redux store to the component's props
const mapStateToProps = state => ({
  project: state.project
});

// Connect the Dashboard component to the Redux store and pass the getProjects action as a prop
export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);